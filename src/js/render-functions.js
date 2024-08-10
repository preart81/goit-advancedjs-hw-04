export const markup = imagesArray =>
  imagesArray
    .map(image => {
      return `  <div class="gallery-card">
        <a href="${image.largeImageURL}" class="gallery-card-link">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" class="gallery-card-img" />
          <ul class="gallery-card-info">
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Likes</p>
              <p class="gallery-card-info-value">${image.likes}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Views</p>
              <p class="gallery-card-info-value">${image.views}</p>
            </li> 
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Comments</p>
              <p class="gallery-card-info-value">${image.comments}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Downloads</p>
              <p class="gallery-card-info-value">${image.downloads}</p>
            </li>
          </ul>
          </a>
        </div>`;
    })
    .join('');
