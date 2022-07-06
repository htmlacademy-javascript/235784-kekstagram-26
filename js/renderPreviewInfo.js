const pictures = document.querySelector('.pictures');
const pictureItem = document.querySelector('#picture').content.querySelector('.picture');
const template = document.createDocumentFragment();

const renderPreviewInfo = function (renderObjects) {
  const imageItem = pictureItem.cloneNode(true);
  imageItem.querySelector('.picture__img').src = renderObjects.url;
  imageItem.querySelector('.picture__likes').textContent = renderObjects.likes;
  imageItem.querySelector('.picture__comments').textContent = renderObjects.comments.length;
  pictures.appendChild(template.appendChild(imageItem));
};

/*Сначала написал так, но увидел требование в ТЗ что нужно использовать document fragment
  const pictureBlock = document.querySelector('.pictures');
  const renderPreviewInfo = function (renderObjects) {
    const renderPreviewInfoItem = `
     <a href="#" class="picture">
        <img class="picture__img" src="${renderObjects.url}" width="182" height="182" alt="Случайная фотография">
        <p class="picture__info">
          <span class="picture__comments">${renderObjects.comments.length}</span>
          <span class="picture__likes">${renderObjects.likes}</span>
        </p>
      </a>
    `;
    pictureBlock.innerHTML += renderPreviewInfoItem;
  };
*/


export {renderPreviewInfo};
