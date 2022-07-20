import {checkEscapeEnter} from './utils.js';
import {photos} from './data.js';

const bodyElement = document.body;
const socialCommentCount =  document.querySelector('.social__comment-count');
const socialCommentCountMin = document.querySelector('.comments-count-min');
const commentLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likeCount =  bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.comments-count');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');
const visibleComment = 5;
const socialCommentsLoader = document.querySelector('.social__comments-loader');
let hidden = '';


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
    if (getItem.comments.length < visibleComment) {
      socialCommentCountMin.textContent = getItem.comments.length;
      socialCommentsLoader.classList.add('hidden');
    } else {
      socialCommentCountMin.textContent = visibleComment;
      socialCommentsLoader.classList.remove('hidden');
    }
    commentCount.textContent = getItem.comments.length;
    commentList.innerHTML = '';
    getItem.comments.forEach((element, index) => {
      if (index >= visibleComment) {
        hidden = 'hidden';
      } else {
        hidden = '';
      }
      commentList.innerHTML += `
        <li class="social__comment ${hidden}">
          <img
              class="social__picture"
              src="${element.avatar}"
              alt="${element.name}"
              width="35" height="35">
          <p class="social__text">${element.message}</p>
        </li>
    `;
    });

    bodyElement.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
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
    if (index <= 5) {
      element.classList.remove('hidden');
      socialCommentCountMin.textContent = socialCommentsLoader.parentNode.querySelectorAll('.social__comment').length;
    }
  });
});

export {openPopup};
