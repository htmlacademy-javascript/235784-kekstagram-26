/* Функция для получения случайного числа из диапазона */
import {getRandom} from './util.js';
import {createTestObject, createTestComments} from './create.js';
import {rendering} from './rendering.js';
import {renderPopup} from './renderPopup.js';

const nicknames = ['Xen','Antik','Chel','Zakat','Печенька','Чешир','Alukard','СуперВасяxXx','Куница','Че'];
const descriptions = ['Описание 1', 'Описание 2','Описание 3','Описание 4','Описание 5'];
const messages = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const ids = [];
const photos = [];

const uniqueNumber = () => {
  const comments = [];
  for (let i = 0; i < getRandom(1,3); i++) {
    const idInArray = getRandom(1,135);
    if (ids.includes(idInArray)) {
      i--;
    } else {
      ids.push(idInArray);
      comments.push(new createTestComments(idInArray, getRandom(1,6),  messages[getRandom(0,messages.length-1)], nicknames[getRandom(0,nicknames.length-1)]));
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
  rendering(photos[i]);
}

const photo = document.querySelectorAll('.picture');
for (let i = 0; i < photos.length; i++) {
  photo[i].addEventListener('click', () => {
    renderPopup(photos[i]);
  });
}

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
});

window.addEventListener('keydown',  (evt) => {
  if(evt.keyCode === 27) {
    console.log('2');
    document.body.classList.remove('modal-open');
    document.querySelector('.big-picture').classList.add('hidden');
  }
});

