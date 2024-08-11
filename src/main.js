import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchImages as pixabayFetchImages } from './js/pixabay-api';
import { markup } from './js/render-functions';

const MSG_NO_RESULTS =
  'Sorry, there are no images matching your search query. Please try again.';
const MSG_END_OF_SEARCH =
  'We are sorry, but you have reached the end of search results.';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-text');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

let page = 1;
const img_per_page = 15;
let searhText = '';

const showGallery = searhText => {
  btnLoadMore.classList.add('is-hidden');
  loader.style.display = 'block';

  pixabayFetchImages(searhText, page, img_per_page)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: MSG_NO_RESULTS,
        });
        return;
      }
      const rect2 = gallery.getBoundingClientRect();
      gallery.insertAdjacentHTML('beforeend', markup(images.hits));
      galleryLightbox.refresh();

      if (
        images.hits.length < img_per_page ||
        img_per_page * page >= images.totalHits
      ) {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: MSG_END_OF_SEARCH,
        });
      } else {
        btnLoadMore.classList.remove('is-hidden');
      }
      if (page > 1) {
        const galleryCard = document.querySelector('.gallery-card');
        const rect = galleryCard.getBoundingClientRect();

        console.log(rect2);

        const scrollHeight = rect.height * 2;
        // // прокуртка на 2 висоти зображення як в завданні
        // window.scrollBy({ top: scrollHeight, behavior: 'smooth' });
        // пркурутка до нових зображень
        window.scrollBy({ top: rect2.bottom, behavior: 'smooth' });
      }

      // console.log(rect);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

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
  page = 1;
  showGallery(searhText);
};

const onLoadMore = () => {
  page += 1;
  showGallery(searhText);
};

searchForm.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoadMore);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  // animationSlide: false,
  animationSpeed: 150,
  fadeSpeed: 150,
});
