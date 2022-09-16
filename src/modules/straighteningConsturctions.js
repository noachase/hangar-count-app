import {getPifagorGypotenuse} from './helperFunctions.js';
import selectors from './selectors.js';
const {
  tdPcsCrests,
  tdMCrests,
  tdPcsChecks,
  tdMChecks,
} = selectors;

// кресты
export const getStrengtheningConstructionCount = (height, length) => {
  const crestCol = length < 60 ? 4 : 6;
  const crestPipeLen = getPifagorGypotenuse(3, height, 1) * 2;
  const crestTotalPipeLen = Math.ceil(crestPipeLen * crestCol);

  const checksCol = 4;
  const checkPipeLen = getPifagorGypotenuse(3, height, 1);
  const checksTotalPipeLen = Math.ceil(checkPipeLen * checksCol);

  tdPcsCrests.textContent = crestCol + ` шт`;
  tdMCrests.textContent = crestTotalPipeLen + ` м`;
  tdPcsChecks.textContent = checksCol + ` шт`;
  tdMChecks.textContent = checksTotalPipeLen + ` м`;
};
