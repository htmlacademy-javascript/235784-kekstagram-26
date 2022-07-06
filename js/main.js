/* Функция для получения случайного числа из диапазона */
import {getRandom} from './util.js';
import {createTestObject, createTestComments} from './create.js';
import {renderPreviewInfo} from './renderPreviewInfo.js';
import {renderPopup} from './renderPopup.js';
import {nicknames,descriptions,messages} from './arrays.js';

const ids = [];
const photos = [];

/*Генерация псевдо-данных*/
const uniqueNumber = () => {
  const comments = [];
  for (let i = 0; i < getRandom(1,3); i++) {
    const idInArray = getRandom(1,135);
    if (ids.includes(idInArray)) {
      i--;
    } else {
      ids.push(idInArray);
      comments.push(new createTestComments(
        idInArray, getRandom(1,6),
        messages[getRandom(0,messages.length-1)],
        nicknames[getRandom(0,nicknames.length-1)]
      ));
    }
  }
  return comments;
};

for (let i = 0; i < 25; i++) {
  photos.push(new createTestObject(
    i+1,
    i+1,
    descriptions[getRandom(0,descriptions.length-1)],
    getRandom(15,200),
    uniqueNumber()));
}

for (let i = 0; i < photos.length; i++) {
  renderPreviewInfo(photos[i]);
}

const photo = document.querySelectorAll('.picture');

/*Открытие popup по клику на фото-превью*/
for (let i = 0; i < photos.length; i++) {
  photo[i].addEventListener('click', () => {
    renderPopup(photos[i]);
  });
}

/*Закрытие popup по клику на крестик или кнопке Escape */
document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
});

document.body.addEventListener('keydown',  (evt) => {
  if(evt.keyCode === 27) {
    document.body.classList.remove('modal-open');
    document.querySelector('.big-picture').classList.add('hidden');
  }
});

