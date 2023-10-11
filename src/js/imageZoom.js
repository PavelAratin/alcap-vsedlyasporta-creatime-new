export function getImageZoom() {
  const imageZoomContainerElems = document.querySelectorAll('.js-image-zoom-container');

  var options2 = {
    fillContainer: true,
    offset: { vertical: 0, horizontal: 10 }
  };
  //инициализация плагина увеличения картинки
  imageZoomContainerElems.forEach(function (imageZoomContainerEl) {
    new ImageZoom(imageZoomContainerEl, options2);
  })

  const imageZoomZoomedImageElems = document.querySelectorAll('.js-image-zoom__zoomed-image');
  console.log(imageZoomZoomedImageElems);
  const cardEl = document.querySelector('.js-card');
  imageZoomZoomedImageElems.forEach(function (imageZoomZoomedImageEl) {
    cardEl.append(imageZoomZoomedImageEl)
  })
};