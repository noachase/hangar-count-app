import { getPifagorGypotenuse } from './helperFunctions.js';
import selectors from './selectors.js';
const {
  profileWalls,
  profileFront,
  profileCeiling,
} = selectors;

export const getProfileCount = (height, width, length) => {
  const fermRise = width <= 19 ? 3.2 : 3.5;
  const triangleArea = ((width / 2) * fermRise) / 2;
  const triangleGypotenuse = getPifagorGypotenuse(width / 2, fermRise, 0);

  const profileWallsCalcs = height * length;
  const profileFrontCalcs = (triangleArea * 2) + (height * width);
  const profileCeilingCalcs = (triangleGypotenuse * length) * 2;

  profileWalls.textContent = `${profileWallsCalcs} м`;
  profileFront.textContent = `${profileFrontCalcs} м`;
  profileCeiling.textContent = `${profileCeilingCalcs} м`;
};
