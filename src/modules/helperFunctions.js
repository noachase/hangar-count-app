export function addTenPercent(numb, round) {
  return (numb + numb * .1).toFixed(round);
}

export function getPifagorGypotenuse(triangleWidth, height, round) {
  return (Math.sqrt(triangleWidth ** 2 + height ** 2)).toFixed(round);
}
