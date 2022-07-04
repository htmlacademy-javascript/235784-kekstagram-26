/*
На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
 */
const pictureBlock = document.querySelector('.pictures');
const rendering = function (renderObjects) {
  const renderingItem = `
   <a href="#" class="picture">
      <img class="picture__img" src="${renderObjects.url}" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments">${renderObjects.comments.length}</span>
        <span class="picture__likes">${renderObjects.likes}</span>
      </p>
    </a>
  `;
  pictureBlock.innerHTML += renderingItem;
};

export {rendering};
