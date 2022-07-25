import {render} from './renderPhotoGrid.js';
import {openPopup} from './popupFullSize.js';
import './uploadForm.js';
import './edit.js';
import {getInfoFromServer} from './getData.js';
import './validate.js';
import './notification.js';

getInfoFromServer((posts) => {
  render(posts);
  openPopup(posts);
});
