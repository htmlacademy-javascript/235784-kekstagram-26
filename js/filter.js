import {render} from './render-photo-grid.js';

const DEBOUNCE_TIME = 500;
const RANDOM_PHOTO_MAX_COUNT = 10;

const filtersElement = document.querySelector('.img-filters');
const filtersListElement = filtersElement.querySelector('.img-filters__form');
const filterBtnElement = filtersListElement.querySelectorAll('.img-filters__button');

const filterItems = (photos, filter) => {
  if(filter.id.endsWith('default')) {
    render(photos);
  }
  if(filter.id.endsWith('random')) {
    photos.sort(() => Math.random() - 0.5);
    render(photos.slice(0, RANDOM_PHOTO_MAX_COUNT));
  }
  if(filter.id.endsWith('discussed')) {
    photos.sort((previousPhoto, nextPhoto) => nextPhoto.comments.length - previousPhoto.comments.length);
    render(photos);
  }
};

const debounce = (callback, timeoutDelayCount) => {
  let timeoutName;
  return (...rest) => {
    clearTimeout(timeoutName);
    timeoutName = setTimeout(() => callback.apply(this, rest), timeoutDelayCount);
  };
};

const setFilterHandlers = (posts) => {
  const filterHandler = debounce(filterItems, DEBOUNCE_TIME);

  filterBtnElement.forEach((filterBtn) => {
    filterBtn.addEventListener('click', () => {
      filterHandler.call(this, posts.slice(), filterBtn);
    });
  });

  filtersListElement.addEventListener('click', (evt) => {
    filterBtnElement.forEach((filterBtn) => {
      filterBtn.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
  });
};

export {setFilterHandlers};
