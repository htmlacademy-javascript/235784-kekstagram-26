import {checkEscapeEnter} from './utils.js';

const bodyElement = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
const likeCountElement =  bigPictureElement.querySelector('.likes-count');
const commentCountElement = bigPictureElement.querySelector('.comments-count');
const closeBtnElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentListElement = document.querySelector('.social__comments');
const COMMENTS_COUNT = 5;
const socialCommentsLoaderElement = document.querySelector('.social__comments-loader');
const socialCommentElement = commentListElement.querySelector('.social__comment');
let postCommentsElement = [];

const onCloseFromEscape = (evt) => {
  if(checkEscapeEnter(evt)) {
    evt.preventDefault();
    closeModalHandler();
  }
};

const createComment = (item) => {
  socialCommentsLoaderElement.classList.add('hidden');
  if(postCommentsElement.length) {
    socialCommentsLoaderElement.classList.remove('hidden');
  }
  const newComment = socialCommentElement.cloneNode(true);
  newComment.querySelector('.social__picture').src = item.avatar;
  newComment.querySelector('.social__picture').alt = item.name;
  newComment.querySelector('.social__text').textContent = item.message;
  return newComment;
};

const renderComment = (comments) => {
  comments.forEach((comment) => {
    commentListElement.appendChild(createComment(comment));
  });
};

const openPopup = (el) => {
  const openFullSize = document.querySelectorAll('.picture');
  const renderPopup = (getItem) => {
    postCommentsElement = [...getItem.comments];
    bigPictureImgElement.src = getItem.url;
    likeCountElement.textContent = getItem.likes;
    commentCountElement.textContent = getItem.comments.length;
    commentListElement.innerHTML = '';
    renderComment(postCommentsElement.splice(0,COMMENTS_COUNT));
    bodyElement.classList.add('modal-open');
    bigPictureElement.classList.remove('hidden');
    bodyElement.addEventListener('keydown', onCloseFromEscape);
  };
  el.forEach((elem, index) => {
    openFullSize[index].addEventListener('click', () => {
      renderPopup(el[index]);
    });
  });
};

function closeModalHandler() {
  bodyElement.classList.remove('modal-open');
  bigPictureElement.classList.add('hidden');
  bodyElement.removeEventListener('keydown', onCloseFromEscape);
}

closeBtnElement.addEventListener('click', closeModalHandler);

socialCommentsLoaderElement.addEventListener('click', () => {
  renderComment(postCommentsElement.splice(0,COMMENTS_COUNT));
});

export {openPopup};
