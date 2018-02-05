export const dragonCurve = (depth, seed?) => {

  if (depth === 0) {
    return seed;
  }

  let turtle = dragonCurve(depth - 1, seed);
  let newTurtle = '';

  for (var i = 0; i < turtle.length; i++) {
    if (turtle.charAt(i) === 'X') {
      newTurtle += 'X+YF+';
    } else if (turtle.charAt(i) === 'Y') {
      newTurtle += '−FX−Y';
    } else {
      newTurtle += turtle.charAt(i);
    }
  }
  return newTurtle;
};
