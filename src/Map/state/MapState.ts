
import { Tile } from 'Tile/model';

export namespace MapState {

  export type Tiles = Array<Array<Tile>>
  export type Size = { width: number, height: number }

  export type Type = {
    size: Size,
    tiles: Tiles
  };

  export const Initial: Type = {
    size: { width: null, height: null },
    tiles: []
  };
}