import selectors from './selectors.js';
const { pipeTable } = selectors;

export const gatesCalcs = (quantity) => {
  const tBody = pipeTable.children[1];
  const pipeLength = 72;

  if (quantity && quantity > 0) {
    tBody.insertAdjacentHTML('beforeend', `
      <tr>
        <th scope="row">Труба ворота</th>
        <td class='td-pcs-gates'>${quantity} шт</td>
        <td class='td-m-gates'>${quantity * pipeLength} м</td>
      </tr>
    `);
  }
};
