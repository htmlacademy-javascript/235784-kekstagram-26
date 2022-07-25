const pictures = document.querySelector('.pictures');
const pictureItem = document.querySelector('#picture').content.querySelector('.picture');
const template = document.createDocumentFragment();

const render = (element) => {
  const renderPreviewInfo = (renderObjects) => {
    const imageItem = pictureItem.cloneNode(true);
    imageItem.querySelector('.picture__img').src = renderObjects.url;
    imageItem.querySelector('.picture__likes').textContent = renderObjects.likes;
    imageItem.querySelector('.picture__comments').textContent = renderObjects.comments.length;
    pictures.appendChild(template.appendChild(imageItem));
  };

  element.forEach((elem) => renderPreviewInfo(elem));
};

export {render};
