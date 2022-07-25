import {checkEscapeEnter} from './utils.js';
import {closeModalHandler} from './uploadForm.js';

const errorFragment = document.querySelector('#error').content.querySelector('.error');;
const successFragment = document.querySelector('#success').content.querySelector('.success');
const template = document.createDocumentFragment();

const onErrorModal = () => {
  const errorItem = errorFragment.cloneNode(true);
  document.body.appendChild(template.appendChild(errorItem));

  const errorOverlay = document.querySelector('.error');

  function closeFromKeyboard(evt) {
    if(checkEscapeEnter(evt)) {
      evt.preventDefault();
      errorItem.remove();
      errorOverlay.removeEventListener('click', closeOverlay);
      document.body.removeEventListener('keydown', closeFromKeyboard);
      closeModalHandler();
    }
  }

  function closeOverlay(evt) {
    if(evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
      errorItem.remove();
      errorOverlay.removeEventListener('click', closeOverlay);
      document.body.removeEventListener('keydown', closeFromKeyboard);
      closeModalHandler();
    }
  }
  errorOverlay.addEventListener('click', closeOverlay);
  document.body.addEventListener('keydown', closeFromKeyboard);
};

const onSuccessModal = () => {
  const successItem = successFragment.cloneNode(true);
  document.body.appendChild(template.appendChild(successItem));

  const successOverlay = document.querySelector('.success');

  function closeFromKeyboard(evt) {
    if(checkEscapeEnter(evt)) {
      evt.preventDefault();
      successItem.remove();
      successOverlay.removeEventListener('click', closeOverlay);
      document.body.removeEventListener('keydown', closeFromKeyboard);
    }
  }

  function closeOverlay(evt) {
    if(evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
      successItem.remove();
      successOverlay.removeEventListener('click', closeOverlay);
      document.body.removeEventListener('keydown', closeFromKeyboard);
    }
  }
  successOverlay.addEventListener('click', closeOverlay);
  document.body.addEventListener('keydown', closeFromKeyboard);
};

export {onErrorModal,onSuccessModal};
