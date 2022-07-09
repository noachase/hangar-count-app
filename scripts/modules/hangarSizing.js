import {addTenPercent} from './helperFunctions.js';
import selectors from './selectors.js';
const {
  spanArea,
  spanFermLength,
  spanFermCount,
  tdPcsFerm,
  tdMFerm,
  tdPcsRos,
  tdMRos,
} = selectors;

export const getFermLength = (fermLen) => {
  spanFermLength.textContent = fermLen * 2 + ' м';
};

export const getFermCount = (length, fermLen) => {
  const sectionCountStd = Math.ceil(length / 3); // кол-во секций в ангаре
  const lengthRemainder = length % 3; // остаток от длинны 3х метровой секции

  let fermCol, fermColTd, sectionCol, rosPipeLength, pipeLen = null;
  let sectionHintText = '';

  if (lengthRemainder === 0) { // если длина ангара делится нацело, то это кол-во пролетов +1 начальный
    fermCol = (sectionCountStd + 1) * 2;
    fermColTd = sectionCountStd + 1;
    sectionCol = sectionCountStd + 1;
    pipeLen = addTenPercent(+((sectionCol * 2 * fermLen)), 1);
    rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1);
    sectionHintText = ` шт`;
  } else if (lengthRemainder !== 0 && lengthRemainder <= 1) { // если длина ангара не делится нацело, то остаток прибавляется к последнему пролету
    fermCol = sectionCountStd * 2;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1);
    sectionHintText = ` шт. из них 1 пролет до 4м`;
  } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
    fermCol = sectionCountStd * 2;
    fermColTd = sectionCountStd;
    sectionCol = sectionCountStd;
    pipeLen = addTenPercent(+(fermCol * fermLen));
    rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1);
    sectionHintText = ` шт. из них 2 пролета до 4м`;
  }

  tdPcsFerm.textContent = fermColTd + ` шт`;
  spanFermCount.textContent = sectionCol + sectionHintText;
  tdMFerm.textContent = pipeLen + ` м`;
  tdMRos.textContent = rosPipeLength + ` м`;

  tdPcsRos.textContent = '---';
};


// площадь ангара
export const getArea = (width, length) => {
  const area = +width * +length;
  spanArea.textContent = area + ` м.кв`;
};
