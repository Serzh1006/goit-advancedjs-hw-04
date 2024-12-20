import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchByValue } from './js/pixabay-api.js';
import { renderBySearch } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loaderMore = document.querySelector('.loaderMore');
const btnLoadMore = document.querySelector('.loadMoreBtn');

btnLoadMore.classList.add('is-hidden');

let page = 1;
let totalPhotos = 0;
let valueByUser = '';
let totalPages = 0;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const resetFunc = (markup = '') => {
  gallery.innerHTML = markup;
  lightbox.refresh();
  form.reset();
};

const onSubmitSearchPhotos = async e => {
  e.preventDefault();
  const textByUser = e.target.elements[0].value;
  if (textByUser.trim() === '') {
    iziToast.info({
      title: 'Oops...',
      message: 'Please enter text!',
      position: 'topRight',
    });
    return;
  }
  page = 1;
  valueByUser = textByUser.trim();
  loader.classList.remove('is-hidden');
  const { data } = await fetchByValue(textByUser.trim(), page);
  loader.classList.add('is-hidden');
  totalPhotos = data.totalHits;
  if (totalPhotos < 15 && totalPhotos !== 0) {
    if (btnLoadMore.classList.contains('is-hidden')) {
      const markup = renderBySearch(data.hits);
      resetFunc(markup);
      return;
    }
    btnLoadMore.classList.add('is-hidden');
    const markup = renderBySearch(data.hits);
    resetFunc(markup);
    return;
  }
  if (data.hits.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomCenter',
    });
    resetFunc();
    btnLoadMore.classList.add('is-hidden');
    return;
  }
  btnLoadMore.classList.remove('is-hidden');
  const markup = renderBySearch(data.hits);
  resetFunc(markup);
  totalPages = Math.ceil(totalPhotos / 15);
};

const onClickLoadPhotos = async () => {
  page += 1;
  loaderMore.classList.remove('is-hidden');
  btnLoadMore.classList.add('is-show');
  const { data } = await fetchByValue(valueByUser, page);
  loaderMore.classList.add('is-hidden');
  btnLoadMore.classList.remove('is-show');
  const markup = renderBySearch(data.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  if (page === totalPages) {
    btnLoadMore.classList.add('is-hidden');
    iziToast.info({
      title: 'The end!',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomCenter',
    });
  }
  const card = document.querySelector('.gallery-item');
  const rect = card.getBoundingClientRect().height;
  window.scrollBy({
    top: rect * 2,
    behavior: 'smooth',
  });
};

form.addEventListener('submit', onSubmitSearchPhotos);
btnLoadMore.addEventListener('click', onClickLoadPhotos);
