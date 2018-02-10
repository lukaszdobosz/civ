import { dragonCurve } from './dragonCurve';

export function generateTiles(size) {
  let tiles = [];

  const vars = [ 'X', 'Y' ];

  const rand1 = Math.round(Math.random());
  const rand2 = Math.round(Math.random());
  const rand3 = Math.round(Math.random());

  const seed = 'F' + vars[ rand1 ] + vars[ rand2 ] + vars[ rand3 ];
  const depth = Math.round(5.5 + (Math.random() * 3));

  console.log('depth', depth);
  console.log('seed', seed);

  const dragon = dragonCurve(depth, seed);

  for (let x = 0; x < size; x++) {
    tiles.push([]);
    for (let y = 0; y < size; y++) {
      tiles[ x ][ y ] = { type: 0 };
    }
  }

  let x = size / 2;
  let y = size / 2;
  let dir = 1;
  let type = 1;

  for (let i = 0; i < dragon.length; i++) {

    /* if( i >= size) {
       break;
     }*/

    const char = dragon[ i ];

    if (char === 'F') {

      if (x >= 0 && x < size && y >= 0 && y < size) {

        tiles[ x ][ y ].type = type;
        tiles[ x - 1 ] && tiles[ x - 1 ][ y - 1 ] && (tiles[ x - 1 ][ y - 1 ].type = type);
        tiles[ x - 1 ] && tiles[ x - 1 ][ y + 1 ] && (tiles[ x - 1 ][ y + 1 ].type = type);
        tiles[ x + 1 ] && tiles[ x + 1 ][ y - 1 ] && (tiles[ x + 1 ][ y - 1 ].type = type);
        tiles[ x + 1 ] && tiles[ x + 1 ][ y + 1 ] && (tiles[ x + 1 ][ y + 1 ].type = type);

        Math.random() < .05 && tiles[ x - 1 ]
        && tiles[ x - 1 ][ y - 1 ]
        && (tiles[ x - 1 ][ y - 1 ].hasMountain = true);

        if (dir === 1) {
          y = y + 1
        }
        else if (dir === 2) {
          x = x + 1;
        }
        else if (dir === 3) {
          y = y - 1;
        }
        else {
          x = x - 1;
        }
      }

      if (x < 0) {
        x = size - 1;
        type = nextType(type)
      }
      if (y < 0) {
        y = size - 1;
        type = nextType(type,)
      }
      if (x > size - 1) {
        x = 0;
        type = nextType(type)
      }
      if (y > size - 1) {
        y = 0;
        type = nextType(type)
      }

    } else if (char === '+') {
      if (dir === 4) {
        dir = 1;
      } else {
        dir++;
      }
    }

  }

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const averageType = averageTile(tiles, x, y);
      if (averageType === 0) {
        tiles[ x ][ y ] = { type: averageType };
      }

      tiles[ x ][ y ].type = averageType
    }
  }

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      tiles[ x ][ y ] = generateTile(tiles, x, y, size)
    }
  }

  return tiles;
}

function nextType(type) {

  if (type < 3) {
    return type + 1;
  } else {
    return 1;
  }
}

function generateTile(tiles, x, y, size) {
  const tile = tiles[ x ][ y ];

  if (tile.type > 0 && tile.type < 4) {
    if (Math.random() < .1) {
      tile.resource = { type: 1 }
    } else if (Math.random() < .02 && x > 0 && y > 0 && x < size - 1 && y < size - 1) {
      tile.city = { level: 1 }
    }
  }

  return tile;
}

const mode2 = (arr) => {

  var numMapping = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[ i ] === -1) {
      continue;
    }

    if (numMapping[ arr[ i ] ] === undefined) {
      numMapping[ arr[ i ] ] = 0;
    }
    numMapping[ arr[ i ] ] += 1;
  }
  var greatestFreq = 0;
  var mode;

  for (var prop in numMapping) {
    if (numMapping[ prop ] > greatestFreq) {
      greatestFreq = numMapping[ prop ];
      mode = prop;
    }
  }
  return parseFloat(mode);
}

function averageTile(tiles, x, y) {
  var mode = mode2([
    getTile(tiles, x, y),
    getTile(tiles, x, y),
    getTile(tiles, x, y - 1),
    getTile(tiles, x - 1, y),
    getTile(tiles, x, y + 1),
    getTile(tiles, x + 1, y),
    getTile(tiles, x + 1, y + 1),
    getTile(tiles, x + 1, y - 1),
    getTile(tiles, x - 1, y + 1),
    getTile(tiles, x - 1, y - 1),
  ]);

  return mode;
}

function getTile(tiles, x, y) {
  if (x < 0 || x >= tiles.length || y < 0 || y >= tiles.length) {
    return -1;
  }

  return tiles[ x ][ y ].type;

}