import {checkEscapeEnter} from './utils.js';

const bodyElement = document.body;
const socialCommentCountMin =  document.querySelector('.comments-count-min');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likeCount =  bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.comments-count');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');
const COMMENTS_COUNT = 5;
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const socialComment = commentList.querySelector('.social__comment');
let postComments = [];

const onCloseFromEscape = (evt) => {
  if(checkEscapeEnter(evt)) {
    evt.preventDefault();
    closeModalHandler();
  }
};

const createComment = (item) => {
  socialCommentsLoader.classList.add('hidden');
  if(postComments.length) {
    socialCommentsLoader.classList.remove('hidden');
  }
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = item.avatar;
  newComment.querySelector('.social__picture').alt = item.name;
  newComment.querySelector('.social__text').textContent = item.message;
  return newComment;
};

const renderComment = (comments) => {
  comments.forEach((comment) => {
    commentList.appendChild(createComment(comment));
  });
};

const openPopup = (el) => {
  const openFullSize = document.querySelectorAll('.picture');
  const renderPopup = (getItem) => {
    postComments = [...getItem.comments];
    bigPictureImg.src = getItem.url;
    likeCount.textContent = getItem.likes;
    commentCount.textContent = getItem.comments.length;
    commentList.innerHTML = '';
    renderComment(postComments.splice(0,COMMENTS_COUNT));
    bodyElement.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
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
  bigPicture.classList.add('hidden');
  bodyElement.removeEventListener('keydown', onCloseFromEscape);
}



closeBtn.addEventListener('click', closeModalHandler);

socialCommentsLoader.addEventListener('click', () => {
  renderComment(postComments.splice(0,COMMENTS_COUNT));
});

export {openPopup};
