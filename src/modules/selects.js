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
  btn,
  requiredInputs,
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
      stepResult.dataset.step = target.dataset.step;
      stepResult.textContent = target.textContent;

      const inputsArray = Array.from(requiredInputs);
      inputsArray.every(input => input.value.length > 0) &&
      stepResult.textContent.length > 0 ?
      btn.disabled = false : btn.disabled = true;

      stepText.classList.add('selected');
      stepList.classList.remove('active');
    }

    if (target.closest('.select-gates-item')) {
      gatesResult.dataset.gates = target.dataset.gates;
      if (target.dataset.gates === '0') {
        gatesText.classList.remove('selected');
        gatesResult.textContent = '';
      } else {
        gatesResult.textContent = target.textContent;
        gatesText.classList.add('selected');
      }
      gatesList.classList.remove('active');
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

