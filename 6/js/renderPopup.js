import {photos} from './arrays.js';

const openPopup = () => {
  const bigPicture = document.querySelector('.big-picture');
  const renderPopup = function (getItem) {
    bigPicture.querySelector('.big-picture__img img').src = getItem.url;
    bigPicture.querySelector('.likes-count').textContent = getItem.likes;
    bigPicture.querySelector('.comments-count').textContent = getItem.comments.length;

    const commentList = document.querySelector('.social__comments');
    commentList.innerHTML = '';
    for (let i = 0; i < getItem.comments.length; i++) {
      commentList.innerHTML += `
        <li class="social__comment">
          <img
              class="social__picture"
              src="${getItem.comments[i].avatar}"
              alt="${getItem.comments[i].name}"
              width="35" height="35">
          <p class="social__text">${getItem.comments[i].message}</p>
        </li>
    `;
    }

    bigPicture.classList.remove('hidden');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('.hidden');
    document.body.classList.add('modal-open');
  };

  const photo = document.querySelectorAll('.picture');

  /*Открытие popup по клику на фото-превью*/
  photos.forEach((elem, index) => {
    photo[index].addEventListener('click', () => {
      renderPopup(photos[index]);
    });
  });
};

export {openPopup};
