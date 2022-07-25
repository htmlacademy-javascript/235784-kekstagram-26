const picturesElement = document.querySelector('.pictures');
const pictureItemElement = document.querySelector('#picture').content.querySelector('.picture');
const template = document.createDocumentFragment();
const imgFiltersElement = document.querySelector('.img-filters');

const render = (element) => {
  const renderPreviewInfo = (renderObjects) => {
    const imageItem = pictureItemElement.cloneNode(true);
    imageItem.querySelector('.picture__img').src = renderObjects.url;
    imageItem.querySelector('.picture__likes').textContent = renderObjects.likes;
    imageItem.querySelector('.picture__comments').textContent = renderObjects.comments.length;
    picturesElement.appendChild(template.appendChild(imageItem));
  };

  element.forEach((elem) => renderPreviewInfo(elem));
  imgFiltersElement.classList.remove('img-filters--inactive');
};

const destroy = () => {
  const pictureItemElement = document.querySelectorAll('.picture');

  if (pictureItemElement) {
    pictureItemElement.forEach((element) => {
      element.remove();
    });
  };
};

export {render, destroy};
