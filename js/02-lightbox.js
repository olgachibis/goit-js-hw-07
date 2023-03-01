import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(`.gallery`);

const createItems = galleryItems.map(({ description, original, preview }) => {
  return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}).join('');

galleryRef.innerHTML = createItems;

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});