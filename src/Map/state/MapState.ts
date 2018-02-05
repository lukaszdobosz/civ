
import { Tile } from 'Tile/model';

export namespace MapState {

  export type Tiles = Array<Array<Tile>>;

  export type Type = {
    size: number,
    tiles: Tiles,
    zoom: number
  };

  export const Initial: Type = {
    size: null,
    tiles: [],
    zoom: 1
  };
}