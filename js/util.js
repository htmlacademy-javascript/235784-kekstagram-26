const getRandom = (firstNumber, lastNumber) => Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length <= maxSymbol;
const uploadImage = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const validateTag = document.querySelector('.text__hashtags');
const validateTextComment = document.querySelector('.text__description');
const uploadSubmit = document.querySelector('#upload-submit');
const maxSymbols = 140;
const maxHashTags = 5;
const maxHashTagsLength = 20;
const correctEnter = /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,}$/;
const uncorrectEnter = /[^-_=+;:,.`"']$/m;

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

validateTag.addEventListener('keydown', () => {
  let hashTagArray = validateTag.value.split(' ');

});

validateTextComment.addEventListener('keydown', () => {
  if (validateTextComment.value.length >= maxSymbols) {
    return uploadSubmit.setAttribute("disabled", "disabled");
  } else if (validateTextComment.value.length < maxSymbols && uploadSubmit.hasAttributes("disabled")) {
    uploadSubmit.removeAttribute("disabled");
  }
});


export {getRandom,checkWordsCount,validateTextComment,focus};
