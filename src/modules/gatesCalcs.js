import selectors from './selectors.js';
const { pipeTable } = selectors;

export const gatesCalcs = (quantity) => {
  const tBody = pipeTable.children[1];
  const oneGatePipeLength = 72;
  const totalPipeLength = quantity * oneGatePipeLength;

  if (quantity && quantity > 0) {
    tBody.insertAdjacentHTML('beforeend', `
      <tr>
        <th scope="row">Труба ворота</th>
        <td class='td-pcs-gates'>${quantity} шт</td>
        <td class='td-m-gates'>${totalPipeLength} м</td>
      </tr>
    `);
  }
};
