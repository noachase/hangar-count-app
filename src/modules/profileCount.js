import { getPifagorGypotenuse } from './helperFunctions.js';
import selectors from './selectors.js';
const {
  profileWalls,
  profileFront,
  profileRoof,
} = selectors;

export const getProfileCount = (height, width, length) => {
  const fermRise = width <= 19 ? 3.2 : 3.5;
  const triangleArea = ((width / 2) * fermRise) / 2;
  const triangleGypotenuse = getPifagorGypotenuse(width / 2, fermRise, 0);

  const profileWallsCalcs = height * length;
  const profileFrontCalcs = (triangleArea * 2) + (height * width);
  const halfOfRoofArea = triangleGypotenuse * length + 0.7 * length; // 0.7 это добавленная длина на скат крыши
  const profileRoofCalcs = (halfOfRoofArea) * 2;

  profileWalls.textContent = `${profileWallsCalcs} м`;
  profileFront.textContent = `${profileFrontCalcs} м`;
  profileRoof.textContent = `${profileRoofCalcs} м`;
};
