import { TILE_WIDTH, TILE_HEIGHT } from 'Tile/const';

export const getIsoX = (x, y) => TILE_HEIGHT * (x - y);
export const getIsoY = (x, y) => (x + y ) * TILE_WIDTH / 2;

export const getIsoTranslate = (x, y) => `translate(${ getIsoX(x, y) }, ${ getIsoY(x, y) })`;