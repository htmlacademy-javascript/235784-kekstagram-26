import {render} from './render-photo-grid.js';
import {openPopup} from './popup-full-size.js';
import {getInfoFromServer} from './get-data.js';
import {setFilterHandlers} from './filter.js';
import './upload-form.js';
import './edit.js';
import './validate.js';
import './notification.js';


getInfoFromServer((posts) => {
  render(posts);
  setFilterHandlers(posts);
  openPopup(posts);
});
