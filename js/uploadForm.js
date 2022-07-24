import {checkEscapeEnter} from './utils.js';
import {pristine} from './validate.js';

const IMAGE_SCALE_COUNT = 100;
const bodyElement = document.body;
const uploadFile= document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const scaleControl = document.querySelector('.scale__control--value');
const closeBtn = document.querySelector('.img-upload__cancel');
const validateTextComment = document.querySelector('.text__description');
const validateTag = document.querySelector('.text__hashtags');

const onCloseFromEscape = (evt) => {
  if(checkEscapeEnter(evt)) {
    evt.preventDefault();
    closeModalHandler();
  }
};

const openUploadPopup = () => {
  bodyElement.classList.add('modal-open');
  uploadModal.classList.remove('hidden');
  scaleControl.value = `${IMAGE_SCALE_COUNT}%`;
  bodyElement.addEventListener('keydown', onCloseFromEscape);
};

function closeModalHandler() {
  bodyElement.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
  scaleControl.value = `${IMAGE_SCALE_COUNT}%`;
  uploadFile.value = '';
  bodyElement.removeEventListener('keydown', onCloseFromEscape);
  pristine.reset();
  validateTextComment.textContent = '';
  validateTag.textContent = '';
}

uploadFile.addEventListener('change', () => {
  openUploadPopup();
});

closeBtn.addEventListener('click', closeModalHandler);

export {uploadFile, closeModalHandler, openUploadPopup};
