const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const previewImageElement = document.querySelector('.img-upload__preview img');
const filterSelectElement = document.querySelectorAll('.effects__radio');
const filterCountElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsLevelElement = document.querySelector('.effect-level__value');
const scaleControlElement = document.querySelector('.scale__control--value');
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_FILTER = 25;
let scaleCount = 100;

const clearEffects = (element) => {
  element.removeAttribute('class');
  element.removeAttribute('style');
};

filterCountElement.classList.add('hidden');

scaleControlBiggerElement.addEventListener('click', () => {
  if (scaleCount !== MAX_SCALE) {
    scaleCount += STEP_FILTER;
    previewImageElement.style = `transform: scale(${scaleCount / 100});`;
    scaleControlElement.value = `${scaleCount}%`;
  }
});

scaleControlSmallerElement.addEventListener('click', () => {
  if (scaleCount !== MIN_SCALE) {
    scaleCount -= STEP_FILTER;
    previewImageElement.style = `transform: scale(${scaleCount / 100});`;
    scaleControlElement.value = `${scaleCount}%`;
  }
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
});

filterSelectElement.forEach((element) => {
  element.addEventListener('change', () => {
    let unit = '';
    let correctNameFilter = '';
    sliderElement.noUiSlider.reset();
    clearEffects(previewImageElement);
    if (element.value !== 'none') {
      filterCountElement.classList.remove('hidden');
      previewImageElement.classList.add(`effects__preview--${element.value}`);
      if (element.value === 'chrome') {
        correctNameFilter = 'grayscale';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
      }
      if (element.value === 'sepia') {
        correctNameFilter = 'sepia';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
      }
      if (element.value === 'marvin') {
        correctNameFilter = 'invert';
        unit = '%';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
      }
      if (element.value === 'phobos') {
        correctNameFilter = 'blur';
        unit = 'px';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      }
      if (element.value === 'heat') {
        correctNameFilter = 'brightness';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      }
    }
    sliderElement.noUiSlider.on('update', () => {
      effectsLevelElement.value = sliderElement.noUiSlider.get();
      previewImageElement.style = `filter:${correctNameFilter}(${effectsLevelElement.value + unit});`;
    });
    if (element.value === 'none') {
      filterCountElement.classList.add('hidden');
      clearEffects(previewImageElement);
    }
  });
});

export {scaleControlSmallerElement};
