/* Функция для получения случайного числа из диапазона */
const getRandom = (firstNumber, lastNumber) => Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);

const checkWordsCount = (wordsLine, maxSymbol) => wordsLine.length <= maxSymbol;

const nicknames = ['Xen','Antik','Chel','Zakat','Печенька','Чешир','Alukard','СуперВасяxXx','Куница','Че'];
const descriptions = ['Описание 1', 'Описание 2','Описание 3','Описание 4','Описание 5'];
const messages = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const createTestObject = function (id, url, description, likes, comments) {
  this.id = id;
  this.url = `photos${  url  }.jpg`;
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

const photos = [];

for (let i = 0; i < 25; i++) {
  photos.push(new createTestObject(i,i,descriptions[getRandom(0,descriptions.length)],getRandom(15,200),new createTestComments(getRandom(1,135),getRandom(1,6),messages[getRandom(0,messages.length-1)],nicknames[getRandom(0,nicknames.length)])));
}

console.log(photos);

/*
В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.

1. Функция генерации объектов.
2. Прототип для создания объекта.

Структура объекта:
1. id - число от 1 до 25 без повторений.
2. url - адрес картинки вида photos/{{i}} где {{i}} число от 1 до 25
3. description - описание фото.
4. likes - число лайков от 15 до 200
5. comments - массив объектов - список комментариев.

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
 */

