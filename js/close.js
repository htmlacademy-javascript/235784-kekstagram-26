/*Закрытие popup по клику на крестик или кнопке Escape */
import {validateTextComment, focus} from './util.js';
import {bigPictureImg} from './uploadForm.js';

const IMAGE_SIZE_VALUE = 100;
const scaleControl = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview-image');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const uploadSubmit = document.querySelector('#upload-submit');

const closeModal = (modal) => {
  document.body.classList.remove('modal-open');
  document.querySelector(modal).classList.add('hidden');
};

const resetOptions = () => {
  scaleControl.value = `${IMAGE_SIZE_VALUE}%`;
  previewImage.style.transform = 'scale(1)';
  uploadSubmit.value ='';
  bigPictureImg.removeAttribute('style');
  bigPictureImg.removeAttribute('class');
};

const onFocusComment = (field) => {
  if (field.hasFocus()) {return true;}
};

bigPictureCancel.addEventListener('click', () => {
  closeModal('.big-picture');
});

document.body.addEventListener('keydown',  (evt) => {
  if(evt.keyCode === 27 && !focus) {
    resetOptions();
    closeModal('.big-picture');
    closeModal('.img-upload__overlay');
  } else {
    evt.stopPropagation();
  }
});

imgUploadCancel.addEventListener('click', () => {
  closeModal('.img-upload__overlay');
  resetOptions();
});


export {closeModal};
