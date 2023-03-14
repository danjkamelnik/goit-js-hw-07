import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
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

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
});
