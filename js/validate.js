import{checkWordsCount, checkEscapeEnter} from './utils.js';

const orderForm = document.querySelector('#upload-select-image');
const validateTextComment = orderForm.querySelector('.text__description');
const validateTag = orderForm.querySelector('.text__hashtags');
const correctEnter = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,20}$/;
const maxSymbols = 140;
const maxHashTags = 5;

document.querySelector('.img-upload__form');
const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const submitUploadForm = (obValidForm) => {
  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formIsValid = pristine.validate();

    if(formIsValid) {
      console.log('Validate!');
    }
  });
};

const isValidateCommentLength = (value) => checkWordsCount(value, maxSymbols);
pristine.addValidator(
  validateTextComment,
  isValidateCommentLength,
  'Не больше 140 символов'
);

const isValidEnter = (value) => value.split(' ').every((hashtag) => correctEnter.test(hashtag));
pristine.addValidator(
  validateTag,
  isValidEnter,
  'Разрешены только буквы и цифры, не более 20 символов',
);

const isVoidInput = (value) => value === '';
pristine.addValidator(
  validateTag,
  isVoidInput,
  'Введите правильно хэштеги',
);

const isMaxHashtags = (value) => value.split(' ').length <= maxHashTags;
pristine.addValidator(
  validateTag,
  isMaxHashtags,
  'Максимум 5 хэштэгов',
);

const isTheOnlyOne = (value) => value.toLowerCase().split(' ').every((hashtag) => value.filter((tag) => tag === hashtag).length === 1);
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

export {submitUploadForm, pristine};
