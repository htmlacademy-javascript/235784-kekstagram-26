/*Закрытие popup по клику на крестик или кнопке Escape */
const closeModal = (modal) => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeModal();
});

document.body.addEventListener('keydown',  (evt) => {
  if(evt.keyCode === 27) {
    closeModal();
  }
});


export {closeModal};
