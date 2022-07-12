const getRandom = (firstNumber, lastNumber) => Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length <= maxSymbol;
const uploadImage = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const validateTag = document.querySelector('.text__hashtags');
const validateTextComment = document.querySelector('.text__description');

uploadImage.addEventListener('change',  () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

validateTag.addEventListener('keydown', () => {

});


export {getRandom,checkWordsCount};
