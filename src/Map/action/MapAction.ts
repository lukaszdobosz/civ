import { Tile } from 'Tile/model';

export namespace MapAction {
  export const INIT_MAP = 'map/INIT_MAP';
  export const SET_TILES = 'map/SET_TILES';

  export const initMap = (width: number, height: number) => ({
    type: INIT_MAP,
    width,
    height
  });

  export const setTiles = (tiles: Array<Array<Tile>>) => ({
    type: SET_TILES,
    tiles
  });
}
