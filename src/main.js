import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchByValue } from './js/pixabay-api.js';
import { renderBySearch } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', e => {
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
  loader.classList.remove('is-hidden');
  fetchByValue(textByUser.trim())
    .then(data => {
      loader.classList.add('is-hidden');
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomCenter',
        });
        gallery.innerHTML = '';
        lightbox.refresh();
        form.reset();
        return;
      }
      const markup = renderBySearch(data.hits);
      gallery.innerHTML = markup;
      lightbox.refresh();
      form.reset();
    })
    .catch(err => console.log(err));
});
