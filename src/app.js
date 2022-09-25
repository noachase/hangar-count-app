import './modules/selects.js';
import { getColumnCount } from './modules/columns.js';
import { getFermLength, getFermCount, getArea } from './modules/hangarSizing.js';
import { getProgWallsCount, getProgCeilingCount } from './modules/progs.js';
import { getStrengtheningConstructionCount } from './modules/straighteningConsturctions.js';
import { validateFunction } from './modules/validations.js';
import { gatesCalcs } from './modules/gatesCalcs.js';
import { getProfileCount } from './modules/profileCount.js';
import selectors from './modules/selectors.js';
const {
  spanHangarWidth,
  spanHangarLength,
  spanHangarHeight,
  spanHangarColumnStep,
  gatesResult,
  stepResult,
  inputForm,
  btn,
  requiredInputs,
} = selectors;


const init = (height, width, fermLen, length, columnStep, gatesQuantity) => {
  getArea(width, length);
  getFermLength(fermLen, length);
  getStrengtheningConstructionCount(height, length);
  getColumnCount(length, height, width, columnStep);
  getProgWallsCount(length, height, width);
  getProgCeilingCount(length, fermLen);
  getFermCount(length, fermLen, columnStep);
  gatesCalcs(gatesQuantity);
  getProfileCount(height, width, length);
};

const control = () => {
  requiredInputs.forEach(input => {
    input.addEventListener('input', () => {
      const inputsArray = Array.from(requiredInputs);
      inputsArray.every(input => input.value.length > 0) &&
      stepResult.textContent.length > 0 ?
      btn.disabled = false : btn.disabled = true;
    });
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const width = document.getElementById('floatWidth').value;
    const length = document.getElementById('floatLength').value;
    const height = document.getElementById('floatHeight').value;
    const gatesWidth = document.getElementById('floatGatesWidth').value;
    const gatesQuantity = +gatesResult.dataset.gates;
    const columnStep = +stepResult.dataset.step;

    const fermRise = width <= 19 ? 3.2 : 3.5;
    const fermLen = (Math.sqrt((fermRise ** 2) + (width / 2) ** 2)).toFixed(2); // длина 1 половинки фермы

    if (!(width && length && height)) return;

    spanHangarWidth.textContent = `${width} м`;
    spanHangarLength.textContent = `${length} м`;
    spanHangarHeight.textContent = `${height} м`;
    spanHangarColumnStep.textContent = `${columnStep} м`;
    init(height, width, fermLen, length, columnStep, gatesQuantity);
  });

  inputForm.addEventListener('input', validateFunction);
};

control();
