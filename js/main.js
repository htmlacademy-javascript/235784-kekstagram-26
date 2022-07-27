import {render} from './renderPhotoGrid.js';
import {openPopup} from './popupFullSize.js';
import {getInfoFromServer} from './getData.js';
import {setFilterHandlers} from './filter.js';
import './uploadForm.js';
import './edit.js';
import './validate.js';
import './notification.js';


getInfoFromServer((posts) => {
  render(posts);
  openPopup(posts);
  setFilterHandlers(posts);
});
