const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const previewImage = document.querySelector('.img-upload__preview img');
const filterSelect = document.querySelectorAll('.effects__radio');
const filterCount = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsLevel = document.querySelector('.effect-level__value');
const maxScale = 100;
const minScale = 25;
const step = 25;
let scaleCount = 100;

const clearEffects = (element) => {
  element.removeAttribute('class');
  element.removeAttribute('style');
};

filterCount.classList.add('hidden');

scaleControlBigger.addEventListener('click', () => {
  if (scaleCount !== maxScale) {
    scaleCount += step;
    previewImage.style = `transform: scale(${scaleCount / 100});`;
  }
});

scaleControlSmaller.addEventListener('click', () => {
  if (scaleCount !== minScale) {
    scaleCount -= step;
    previewImage.style = `transform: scale(${scaleCount / 100});`;
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

filterSelect.forEach((element) => {
  element.addEventListener('change', () => {
    let unit = '';
    let correctNameFilter = '';
    sliderElement.noUiSlider.reset();
    clearEffects(previewImage);
    if (element.value !== 'none') {
      filterCount.classList.remove('hidden');
      previewImage.classList.add(`effects__preview--${element.value}`);
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
      effectsLevel.value = sliderElement.noUiSlider.get();
      previewImage.style = `filter:${correctNameFilter}(${effectsLevel.value + unit});`;
    });
    if (element.value === 'none') {
      filterCount.classList.add('hidden');
      clearEffects(previewImage);
    }
  });
});

export {scaleControlSmaller};
