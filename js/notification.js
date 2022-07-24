const errorFragment = document.querySelector('#error').content.querySelector('.error');;
const template = document.createDocumentFragment();

const onErrorModal = () => {
  const errorItem = errorFragment.cloneNode(true);
  document.body.appendChild(template.appendChild(errorItem));
};

const destroyErrorModal = () => {
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    document.body.removeChild(errorFragment);
  });
};

export {onErrorModal};
