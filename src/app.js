import './modules/selects.js';
import { getColumnCount } from './modules/columns.js';
import { getFermLength, getFermCount, getArea } from './modules/hangarSizing.js';
import { getProgWallsCount, getProgCeilingCount } from './modules/progs.js';
import { getStrengtheningConstructionCount } from './modules/straighteningConsturctions.js';
import { validateFunction } from './modules/validations.js';
import selectors from './modules/selectors.js';
const {
  spanHangarWidth,
  spanHangarLength,
  inputForm,
  btn,
} = selectors;


const init = (height, width, fermLen, length) => {
  getArea(width, length);
  getFermLength(fermLen, length);
  getStrengtheningConstructionCount(height, length);
  getColumnCount(length, height, width);
  getProgWallsCount(length, height, width);
  getProgCeilingCount(length, fermLen);
  getFermCount(length, fermLen);
};

const control = () => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const width = document.getElementById('floatWidth').value;
    const length = document.getElementById('floatLength').value;
    const height = document.getElementById('floatHeight').value;
    const gatesWidth = document.getElementById('floatGatesWidth').value;

    const fermRise = width <= 19 ? 3.2 : 3.5;
    const fermLen = (Math.sqrt((fermRise ** 2) + (width / 2) ** 2)).toFixed(2); // длина 1 половинки фермы

    if (!(width && length && height)) return;

    spanHangarWidth.textContent = width + ` м`;
    spanHangarLength.textContent = length + ` м`;
    init(height, width, fermLen, length);
  });

  inputForm.addEventListener('input', validateFunction);
};

control();
