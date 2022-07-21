import {getRandom} from './utils.js';

const nicknames = ['Xen','Antik','Chel','Zakat','Печенька','Чешир','Alukard','СуперВасяxXx','Куница','Че'];
const descriptions = ['Описание 1', 'Описание 2','Описание 3','Описание 4','Описание 5'];
const messages = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const minId = 1;
const maxId = 135;
const minComment = 1;
const maxComment = 20;
const photos = [];

const createTestObject = function (id, url, description, likes, comments) {
  this.id = id;
  this.url = `photos/${  url  }.jpg`;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
};

const createTestComments = function (id, avatar, message, name) {
  this.id = id;
  this.avatar = `img/avatar-${  avatar  }.svg`;
  this.message = message;
  this.name = name;
};
/*Генерация псевдо-данных*/
const createComment = () => {
  const comments = [];
  const countComment = getRandom(minComment,maxComment);
  for (let i = 0; i < Number(countComment); i++) {
    const ids = [];
    const idInArray = getRandom(minId,maxId);
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
    createComment()));
}

export {photos};
