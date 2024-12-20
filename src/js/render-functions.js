export const renderBySearch = listPhotos => {
  return listPhotos.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (
        acc +
        `<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" />
          </a></div>
        <div class="gallery-wrap-info">
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">likes</h2>
            <p class="gallery-info-text">${likes}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">views</h2>
            <p class="gallery-info-text">${views}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">comments</h2>
            <p class="gallery-info-text">${comments}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">downloads</h2>
            <p class="gallery-info-text">${downloads}</p>
          </div>
        </div>
    </li>`
      );
    },
    ''
  );
};
