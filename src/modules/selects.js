import selectors from './selectors.js';
const {
  gatesText,
  gatesResult,
  stepText,
  stepResult,
  stepList,
  gatesList,
  stepTriangle,
  doorTriangle,
} = selectors;

const selectsEvents = () => {
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.select-step-title') ||
        target.closest('.select-gates-title') ||
        target.closest('.select-step-item') ||
        target.closest('.select-gates-item')) {
      if (target.closest('.select-step-title')) {
        stepList.classList.toggle('active');
        gatesList.classList.remove('active');
      }
      if (target.closest('.select-gates-title')) {
        gatesList.classList.toggle('active');
        stepList.classList.remove('active');
      }
    } else {
      gatesList.classList.remove('active');
      stepList.classList.remove('active');
    }

    if (target.closest('.select-step-item')) {
      stepResult.textContent = target.textContent;
      stepResult.dataset.step = target.dataset.step;
      stepList.classList.remove('active');
      stepText.classList.add('selected');
    }

    if (target.closest('.select-gates-item')) {
      gatesResult.textContent = target.textContent;
      gatesResult.dataset.gates = target.dataset.gates;
      gatesList.classList.remove('active');
      gatesText.classList.add('selected');
    }

    if (stepList.classList.contains('active')) {
      stepTriangle.style.transform = 'rotate(180deg)';
    } else {
      stepTriangle.style.transform = '';
    }

    if (gatesList.classList.contains('active')) {
      doorTriangle.style.transform = 'rotate(180deg)';
    } else {
      doorTriangle.style.transform = '';
    }
  });
};

selectsEvents();

