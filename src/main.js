import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchImages as pixabayFetchImages } from './js/pixabay-api';
import { markup } from './js/render-functions';

const MSG_NO_RESULTS =
  'Sorry, there are no images matching your search query. Please try again.';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-text');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let searhText = '';

const onSearch = event => {
  event.preventDefault();
  searhText = searchInput.value.trim();
  searchInput.value = '';

  if (searhText === '') {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Enter text',
    });
    return;
  }

  gallery.innerHTML = '';

  loader.style.display = 'block';
  pixabayFetchImages(searhText)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: MSG_NO_RESULTS,
        });
        return;
      }

      gallery.innerHTML = markup(images.hits);

      galleryLightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

searchForm.addEventListener('submit', onSearch);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  // animationSlide: false,
  animationSpeed: 150,
  fadeSpeed: 150,
});
