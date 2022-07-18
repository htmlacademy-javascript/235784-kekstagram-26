/*Закрытие popup по клику на крестик или кнопке Escape */
import {validateTextComment, focus} from './util.js';

const closeModal = (modal) => {
  document.body.classList.remove('modal-open');
  document.querySelector(modal).classList.add('hidden');
};

const scaleControl = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview-image');

const resetOptions = () => {
  scaleControl.value = '100%';
  previewImage.style.transform = 'scale(1)';
};

const onFocusComment = (field) => {
  if (field.hasFocus()){
    return true;
  }
};

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
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

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  closeModal('.img-upload__overlay');
  resetOptions();
});


export {closeModal};
