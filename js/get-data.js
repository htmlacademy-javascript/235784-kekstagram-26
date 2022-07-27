import {attentionMsg} from './notification.js';

const SERVER_DATA = 'https://26.javascript.pages.academy/kekstagram/data';

const getInfoFromServer = (callback) => {
  fetch(SERVER_DATA)
    .then((response) => response.json())
    .then((posts) => callback(posts))
    .catch((err) => attentionMsg(err));
};

export {getInfoFromServer};
