import {checkEscapeEnter} from './utils.js';
import {closeModalHandler} from './upload-form.js';

const errorFragmentElement = document.querySelector('#error').content.querySelector('.error');
const successFragmentElement = document.querySelector('#success').content.querySelector('.success');
const templateElement = document.createDocumentFragment();

const onErrorModal = () => {
  const errorItem = errorFragmentElement.cloneNode(true);
  document.body.appendChild(templateElement.appendChild(errorItem));

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
  const successItem = successFragmentElement.cloneNode(true);
  document.body.appendChild(templateElement.appendChild(successItem));

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

const showAttentionMsg = (errorMsg) => {
  const errorElement = document.createElement('div');
  const errorBtn = document.createElement('button');
  errorBtn.classList.add('error__button');
  errorBtn.innerText = 'ОК';
  errorElement.classList.add('errorMsg');
  errorElement.textContent = errorMsg;
  errorElement.appendChild(errorBtn);
  document.body.appendChild(errorElement);
  errorBtn.addEventListener('click', () => errorElement.remove());
};

export {onErrorModal,onSuccessModal,showAttentionMsg};
