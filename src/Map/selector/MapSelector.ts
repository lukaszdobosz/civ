
import { createSelector } from 'reselect';

export namespace MapSelector {
  export const selectDomain = (state) => state.map;

  export const selectSize = createSelector(
    selectDomain,
    (map) => map && map.size
  );

  export const selectTiles = createSelector(
    selectDomain,
    (map) => map && map.tiles
  );

  export const selectTile =
    (x: number, y: number) =>
      createSelector(
        selectTiles,
        (tiles) => tiles && tiles[x][y]
      );

  export const selectResource =
    (x: number, y: number) =>
      createSelector(
        selectTile(x, y),
        (tile) => tile && tile.resource
      );

}