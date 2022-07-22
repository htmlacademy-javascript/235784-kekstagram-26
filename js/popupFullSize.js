import {checkEscapeEnter} from './utils.js';
import {photos} from './data.js';

const bodyElement = document.body;
const socialCommentCount =  document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likeCount =  bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.comments-count');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');

const onCloseFromEscape = (evt) => {
  if(checkEscapeEnter(evt)) {
    evt.preventDefault();
    closeModalHandler();
  }
};

const openPopup = () => {
  const openFullSize = document.querySelectorAll('.picture');
  const renderPopup = (getItem) => {
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
    bodyElement.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentLoader.classList.add('.hidden');
    bodyElement.addEventListener('keydown', onCloseFromEscape);
  };
  photos.forEach((elem, index) => {
    openFullSize[index].addEventListener('click', () => {
      renderPopup(photos[index]);
    });
  });

};

function closeModalHandler() {
  bodyElement.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bodyElement.removeEventListener('keydown', onCloseFromEscape);
}

closeBtn.addEventListener('click', closeModalHandler);

socialCommentsLoader.addEventListener('click', () => {
  socialCommentsLoader.parentNode.querySelectorAll('.social__comment.hidden').forEach((element, index) => {
    if (index <= visibleComment) {
      element.classList.remove('hidden');
      socialCommentCountMin.textContent = socialCommentsLoader.parentNode.querySelectorAll('.social__comment').length;
    }
  });
});

export {openPopup};
