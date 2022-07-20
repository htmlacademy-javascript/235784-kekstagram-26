const getRandom = (firstNumber, lastNumber) => Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length < maxSymbol;
const uploadImage = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const maxSymbols = 140;
const maxHashTags = 5;
const maxHashTagsLength = 20;
const correctEnter = /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,}$/;
const uncorrectEnter = /[^-_=+;:,.`"']$/m;
const orderForm = document.querySelector('#upload-select-image');
const validateTextComment = orderForm.querySelector('.text__description');
const validateTag = orderForm.querySelector('.text__hashtags');
const uploadFormData = document.querySelector('.img-upload__form');


let focus = false;
const checkEsc = (selectorCheck) => {
  selectorCheck.addEventListener('focusin', () => {
    focus = true;
  });
  selectorCheck.addEventListener('focusin', () => {
    focus = true;
  });
};

checkEsc(validateTextComment);
checkEsc(validateTag);

validateTextComment.addEventListener('focusout', () => {
  focus = false;
});

uploadImage.addEventListener('change',  () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
});


/* Валидация полей */

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const isValidateCommentLength = (value) => checkWordsCount(value, maxSymbols);
pristine.addValidator(
  validateTextComment,
  isValidateCommentLength,
  'Не больше 140 символов'
);

const isValidateTagLength = (value) => checkWordsCount(value, maxHashTagsLength);
pristine.addValidator(
  validateTag,
  isValidateTagLength,
  'Не больше 20 символов'
);

uploadFormData.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) {
    validateTag.style = 'border: 3px solid #ff0000';
  }else{
    validateTag.style.border = 'none';
  }
});


export {getRandom,checkWordsCount,validateTextComment, focus};
