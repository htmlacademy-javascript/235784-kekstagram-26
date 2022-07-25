const picturesElement = document.querySelector('.pictures');
const pictureItemElement = document.querySelector('#picture').content.querySelector('.picture');
const templateElement = document.createDocumentFragment();

const render = (element) => {
  const renderPreviewInfo = (renderObjects) => {
    const imageItem = pictureItemElement.cloneNode(true);
    imageItem.querySelector('.picture__img').src = renderObjects.url;
    imageItem.querySelector('.picture__likes').textContent = renderObjects.likes;
    imageItem.querySelector('.picture__comments').textContent = renderObjects.comments.length;
    picturesElement.appendChild(templateElement.appendChild(imageItem));
  };

  element.forEach((elem) => renderPreviewInfo(elem));
};

export {render};
