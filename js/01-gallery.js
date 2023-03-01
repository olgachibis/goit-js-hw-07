import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(`.gallery`);
const createItems = galleryItems.map(({ description, original, preview }) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
}).join('');
galleryRef.innerHTML = createItems;

galleryRef.addEventListener("click", onGalleryClick); 

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

    galleryRef.addEventListener("keydown", function (event) {
        if (event.code === "Escape") {
            instance.close();
        }
    })
}

