import {getRandom} from './util.js';
import {descriptions, ids, messages, nicknames, photos} from './arrays.js';
import {createTestComments, createTestObject} from './create.js';

const render = () => {
  const pictures = document.querySelector('.pictures');
  const pictureItem = document.querySelector('#picture').content.querySelector('.picture');
  const template = document.createDocumentFragment();
  const minId = 1;
  const maxId = 135;

  const renderPreviewInfo = function (renderObjects) {
    const imageItem = pictureItem.cloneNode(true);
    imageItem.querySelector('.picture__img').src = renderObjects.url;
    imageItem.querySelector('.picture__likes').textContent = renderObjects.likes;
    imageItem.querySelector('.picture__comments').textContent = renderObjects.comments.length;
    pictures.appendChild(template.appendChild(imageItem));
  };

  /*Генерация псевдо-данных*/
  const createComment = () => {
    const comments = [];
    const countComment = getRandom(1,3);
    for (let i = 0; i < countComment; i++) {
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

  photos.forEach((elem) => renderPreviewInfo(elem));
};

export {render};
