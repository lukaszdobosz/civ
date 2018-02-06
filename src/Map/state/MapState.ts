
import { Tile } from 'Tile/model';

export namespace MapState {

  export type Tiles = Array<Array<Tile>>;

  export type Type = {
    size: number,
    tiles: Tiles,
    zoom: number
    pan: { x : number, y: number }
  };

  export const Initial: Type = {
    size: null,
    tiles: [],
    zoom: 1,
    pan: { x : 0, y: 0 }
  };
}