import { Tile } from 'Tile/model';

export namespace MapAction {
  export const INIT_MAP = 'map/INIT_MAP';
  export const SET_TILES = 'map/SET_TILES';
  export const SET_ZOOM = 'map/SET_ZOOM';
  export const SET_PAN = 'map/SET_PAN';

  export const initMap = (size: number) => ({
    type: INIT_MAP,
    size
  });

  export const setTiles = (tiles: Array<Array<Tile>>) => ({
    type: SET_TILES,
    tiles
  });

  export const setZoom = (deltaY) => ({
    type: SET_ZOOM,
    deltaY
  });

  export const setPan = (x, y) => ({
    type: SET_PAN,
    x,
    y
  });
}
