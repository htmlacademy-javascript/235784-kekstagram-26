import {checkEscapeEnter} from './utils.js';

const IMAGE_SCALE_COUNT = 100;
const bodyElement = document.body;
const uploadFile= document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const scaleControl = document.querySelector('.scale__control--value');
const closeBtn = document.querySelector('.img-upload__cancel');

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
}

uploadFile.addEventListener('change', () => {
  openUploadPopup();
});

closeBtn.addEventListener('click', closeModalHandler);

export {uploadFile};
