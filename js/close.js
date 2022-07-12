/*Закрытие popup по клику на крестик или кнопке Escape */
const closeModal = (modal) => {
  document.body.classList.remove('modal-open');
  document.querySelector(modal).classList.add('hidden');
};

const scaleControl = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview-image');

const resetOptions = () => {
    scaleControl.value = '100%';
    previewImage.style.transform = 'scale(1)';
}

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeModal('.big-picture');
});

document.body.addEventListener('keydown',  (evt) => {
  if(evt.keyCode === 27) {
    closeModal('.big-picture');
    closeModal('.img-upload__overlay');
    resetOptions();
  }
});

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  closeModal('.img-upload__overlay');
  resetOptions();
});


export {closeModal};
