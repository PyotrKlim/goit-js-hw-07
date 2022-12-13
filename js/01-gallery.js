import { galleryItems } from "./gallery-items.js";
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


galleryRef.addEventListener("click", openOriginImg);

function openOriginImg(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originImgSize = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${originImgSize}" >
  `);

  instance.show();

    window.addEventListener("keydown", closeOfEscape);
  function closeOfEscape(event) {
   
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

