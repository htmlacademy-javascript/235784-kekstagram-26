import {checkWordsCount, checkEscapeEnter} from './utils.js';
import {uploadData} from './sendData.js';
import {closeModalHandler} from './uploadForm.js';
import {onSuccessModal, onErrorModal} from './notification.js';

const orderFormElement = document.querySelector('#upload-select-image');
const validateTextCommentElement = orderFormElement.querySelector('.text__description');
const validateTagElement = orderFormElement.querySelector('.text__hashtags');
const imgUploadSubmitElement = document.querySelector('.img-upload__submit');
const CORRECT_ENTER = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,20}$/;
const MAX_SYMBOLS = 140;
const MAX_HASHTAGS = 5;

document.querySelector('.img-upload__form');
const pristine = new Pristine(orderFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const initUploadFormValidation = (onSuccessValidation) => {
  orderFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formIsValid = pristine.validate();

    if(formIsValid) {
      imgUploadSubmitElement.disabled = true;
      const formData = new FormData(evt.target);
      onSuccessValidation(formData);
    }
  });
};

const uploadFormSubmit = (formData) => {
  const uploadSuccessHandler = () => {
    onSuccessModal();
    closeModalHandler();
  };
  const uploadFailHandler = () => {
    onErrorModal();
    closeModalHandler();
  };
  uploadData(formData, uploadSuccessHandler, uploadFailHandler);
};
initUploadFormValidation(uploadFormSubmit);

const isValidateCommentLength = (value) => checkWordsCount(value, MAX_SYMBOLS);
pristine.addValidator(
  validateTextCommentElement,
  isValidateCommentLength,
  'Не больше 140 символов'
);

const isVoidInput = (value) => {
  if (value === '') {
    return true;
  }
  const newHashtags = value.split(' ');
  return newHashtags.every((hashtag) => CORRECT_ENTER.test(hashtag));
};
pristine.addValidator(
  validateTagElement,
  isVoidInput,
  'Разрешены только буквы и цифры, не более 20 символов',
);

const isMaxHashtags = (value) => value.split(' ').length <= MAX_HASHTAGS;
pristine.addValidator(
  validateTagElement,
  isMaxHashtags,
  'Максимум 5 хэштэгов',
);

const isTheOnlyOne = (value) => {
  const newHashtags = value.toLowerCase().split(' ');
  return newHashtags.every((newHashtag) => newHashtags.filter((tag) => tag === newHashtag).length === 1);
};

pristine.addValidator(
  validateTagElement,
  isTheOnlyOne,
  'Два одинаковых хзштэга!',
);


validateTextCommentElement.addEventListener('keydown', (evt) => {
  if (checkEscapeEnter(evt)) {
    evt.stopPropagation();
  }
});

validateTagElement.addEventListener('keydown', (evt) => {
  if (checkEscapeEnter(evt)) {
    evt.stopPropagation();
  }
});

export {initUploadFormValidation,pristine};
