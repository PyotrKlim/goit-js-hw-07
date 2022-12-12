import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", createListOfGallery(galleryItems));

function createListOfGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
       <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
      </a>
     </div>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

