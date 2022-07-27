const picturesElement = document.querySelector('.pictures');
const pictureItemElement = document.querySelector('#picture').content.querySelector('.picture');
const template = document.createDocumentFragment();
const imgFiltersElement = document.querySelector('.img-filters');

const remove = () => {
  picturesElement.querySelectorAll('.picture').forEach((post) => post.remove());
};

const render = (element) => {
  if (pictureItemElement) {remove();}
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

export {render, remove};
