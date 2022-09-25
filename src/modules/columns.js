import selectors from './selectors.js';
const {
  tdPcsPillars,
  tdMPillars,
  tdPcsPillarsFront,
  tdMPillarsFront,
} = selectors;

// стойки
export const getColumnCount = (length, height, width, columnStep) => {
  // ! TODO посчитать доп стойки для фронтонов
  // const distanceFromGatesToEdge = (width - gatesWidth) / 2
  const frontonPillarsCount = (Math.floor(width / 4)) * 2;

  // if (distanceFromGatesToEdge >= 4) { // кол-во столбов в одном фронтоне из учета наличия ворот
  //   frontonPillarsCount = 4
  // } else if (distanceFromGatesToEdge >= 8) {
  //   frontonPillarsCount = 8
  // } else if (distanceFromGatesToEdge >= 12) {
  //   frontonPillarsCount = 16
  // } else {
  //   frontonPillarsCount = 0
  // }

  const frontonPillarsLength = frontonPillarsCount * 7; // 1 столб торцевой = 7м
  const sectionCountStd = Math.ceil(length / columnStep);
  const lengthRemainder = length % columnStep;
  let innerPcs = null;
  let innerM = null;

  if (lengthRemainder === 0) {
    innerPcs = (sectionCountStd + 1) * 2;
    innerM = innerPcs * height;
  } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
    innerPcs = sectionCountStd * 2;
    innerM = innerPcs * height;
  } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
    innerPcs = sectionCountStd * 2;
    innerM = innerPcs * height;
  }

  tdPcsPillars.textContent = innerPcs + ` шт`;
  tdMPillars.textContent = innerM + ` м`;
  // spanPillarsFrontonCount.textContent = frontonPillarsCount + ` шт`
  tdPcsPillarsFront.textContent = `${frontonPillarsCount} шт`; // стойки торцевые кол-во
  tdMPillarsFront.textContent = `${frontonPillarsLength} м`;
};
