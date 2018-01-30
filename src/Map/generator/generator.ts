
import { MapState } from 'Map/state';

export function generateTiles(size) {
  const tiles: MapState.Tiles = [];

  for ( let x = 0; x < size.width; x++) {
    tiles[x] = [];

    for ( let y = 0; y < size.height; y++) {

      const rand = Math.round(Math.random() * 5);

      tiles[x][y] = {
        type: Math.round(Math.random() * 4),
        resource: rand ? { type: rand } : null
      }
    }
  }

  return tiles;
}