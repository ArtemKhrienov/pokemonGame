export const randomInt = (min = 1, max = 100) => {
  return min + Math.floor((max - min) * Math.random());
};