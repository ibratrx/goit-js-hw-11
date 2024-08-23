import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value.trim();
    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query!',
      });
      return;
    }
    gallery.innerHTML = '';
    loader.classList.add('visible');
    try {
      const data = await fetchImages(query);
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data.hits);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    } finally {
      loader.classList.remove('visible');
    }
  });
});