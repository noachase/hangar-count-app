import selectors from './selectors.js';
const {
  doorsText,
  doorsResult,
  stepText,
  stepResult,
  stepList,
  doorsList,
  stepTriangle,
  doorTriangle,
} = selectors;

const selectsEvents = () => {
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.select-step-title') ||
        target.closest('.select-doors-title') ||
        target.closest('.select-step-item') ||
        target.closest('.select-doors-item')) {
      if (target.closest('.select-step-title')) {
        stepList.classList.toggle('active');
        doorsList.classList.remove('active');
      }
      if (target.closest('.select-doors-title')) {
        doorsList.classList.toggle('active');
        stepList.classList.remove('active');
      }
    } else {
      doorsList.classList.remove('active');
      stepList.classList.remove('active');
    }

    if (target.closest('.select-step-item')) {
      stepResult.textContent = target.textContent;
      stepList.classList.remove('active');
      stepText.classList.add('selected');
    }

    if (target.closest('.select-doors-item')) {
      doorsResult.textContent = target.textContent;
      doorsList.classList.remove('active');
      doorsText.classList.add('selected');
    }

    if (stepList.classList.contains('active')) {
      stepTriangle.style.transform = 'rotate(180deg)';
    } else {
      stepTriangle.style.transform = '';
    }

    if (doorsList.classList.contains('active')) {
      doorTriangle.style.transform = 'rotate(180deg)';
    } else {
      doorTriangle.style.transform = '';
    }
  });
};

selectsEvents();

