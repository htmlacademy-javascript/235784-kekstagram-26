import {photos} from './arrays.js';

const bodyElement = document.body;
const socialCommentCount =  document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likeCount =  bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const IMAGE_SIZE_VALUE = 100;
const scaleControl = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview-image');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const uploadSubmit = document.querySelector('#upload-submit');

const openPopup = () => {
  const photo = document.querySelectorAll('.picture');
  const renderPopup = function (getItem) {
    bigPictureImg.src = getItem.url;
    likeCount.textContent = getItem.likes;
    commentCount.textContent = getItem.comments.length;
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
    socialCommentCount.classList.add('hidden');
    commentLoader.classList.add('.hidden');
    bodyElement.classList.add('modal-open');
  };

  /*Открытие popup по клику на фото-превью*/
  photos.forEach((elem, index) => {
    photo[index].addEventListener('click', () => {
      renderPopup(photos[index]);
    });
  });
};

const closeModal = (modal) => {
  bodyElement.classList.remove('modal-open');
  document.querySelector(modal).classList.add('hidden');
};

const closeUploadForm = () => {
  bodyElement.classList.remove('modal-open');

}

const resetOptions = () => {
  scaleControl.value = `${IMAGE_SIZE_VALUE}%`;
  previewImage.style.transform = 'scale(1)';
  uploadSubmit.value ='';
  bigPictureImg.removeAttribute('style');
  bigPictureImg.removeAttribute('class');
};

export {openPopup,bigPictureImg};
