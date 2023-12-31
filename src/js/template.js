export function imagesTemplate(hits) {
  return hits.map(data => imageTemplate(data)).join('');
}

function imageTemplate({
  previewURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="photo-card">
    <a class="gallery__link" href="${largeImageURL}"><img src="${previewURL}" alt="${tags}" loading="lazy" /></a>
    <div class="info">
      <p class="info-item">
        <b>Likes
        ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views
        ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments
        ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads
        ${downloads}</b>
      </p>
    </div>
  </div>`;
}
