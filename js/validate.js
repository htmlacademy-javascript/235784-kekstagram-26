import {checkWordsCount, checkEscapeEnter} from './utils.js';
import {uploadData} from './sendData.js';
import {closeModalHandler} from './uploadForm.js';
import {onErrorModal} from './notification.js';

const orderForm = document.querySelector('#upload-select-image');
const validateTextComment = orderForm.querySelector('.text__description');
const validateTag = orderForm.querySelector('.text__hashtags');
const CORRECT_ENTER = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,20}$/;
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const MAX_SYMBOLS = 140;
const MAX_HASHTAGS = 5;

document.querySelector('.img-upload__form');
const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formIsValid = pristine.validate();
  if (!formIsValid) {
    imgUploadSubmit.disabled = true;
  }
  const uploadFormSubmit = (formData) => {
    const uploadSuccessHandler = () => {
      closeModalHandler();
    };
    const uploadFailHandler = () => {
      onErrorModal();
      closeModalHandler();
    };
    uploadData(formData, uploadSuccessHandler, uploadFailHandler);
  };
  uploadFormSubmit(orderForm);
});

const isValidateCommentLength = (value) => checkWordsCount(value, MAX_SYMBOLS);
pristine.addValidator(
  validateTextComment,
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
  validateTag,
  isVoidInput,
  'Разрешены только буквы и цифры, не более 20 символов',
);

const isMaxHashtags = (value) => value.split(' ').length <= MAX_HASHTAGS;
pristine.addValidator(
  validateTag,
  isMaxHashtags,
  'Максимум 5 хэштэгов',
);

const isTheOnlyOne = (value) => {
  const newHashtags = value.toLowerCase().split(' ');
  return newHashtags.every((newHashtag) => newHashtags.filter((tag) => tag === newHashtag).length === 1);
};

pristine.addValidator(
  validateTag,
  isTheOnlyOne,
  'Два одинаковых хзштэга!',
);


validateTextComment.addEventListener('keydown', (evt) => {
  if (checkEscapeEnter(evt)) {
    evt.stopPropagation();
  }
});

validateTag.addEventListener('keydown', (evt) => {
  if (checkEscapeEnter(evt)) {
    evt.stopPropagation();
  }
});

export {pristine};
