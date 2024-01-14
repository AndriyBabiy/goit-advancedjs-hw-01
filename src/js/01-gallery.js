import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

import { galleryItems } from './gallery-items';

let galleryLocation = document.querySelector('.gallery');

function makeGallery(images, HTMLLocation) {
  let markup = (imageSmall, imageLarge, altText) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${imageLarge}">
        <img class="gallery__image" src="${imageSmall}" alt="${altText}"/>
      </a>
    </div>
  `;

  let galleryMarkup = images
    .map(({ description, original, preview }) => markup(preview, original, description));

  HTMLLocation.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));
}

makeGallery(galleryItems, galleryLocation);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});