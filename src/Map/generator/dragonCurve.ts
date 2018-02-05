
export const dragonCurve = (depth, seed?) => {

  if (depth === 0) {
    return seed;
  }

  let dragon = dragonCurve(depth - 1, seed);
  let newDragon = '';

  for (let i = 0; i < dragon.length; i++) {
    if (dragon.charAt(i) === 'X') {
      newDragon += 'X+YF++';
    } else if (dragon.charAt(i) === 'Y') {
      newDragon += '−FX−Y';
    } else {
      newDragon += dragon.charAt(i);
    }
  }

  return newDragon;
};
