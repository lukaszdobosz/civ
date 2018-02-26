
import { createSelector } from 'reselect';
import { MapSelector } from 'Map/selector';

export namespace CitySelector {

  export const selectCity =
    (x: number, y: number) =>
      createSelector(
        MapSelector.selectTile(x, y),
        (tile) => tile && tile.city ? tile.city : null
      );

  export const selectIsDetailedView =
    (x: number, y: number) =>
      createSelector(
        MapSelector.selectZoom,
        (zoom) => zoom > 8
      )
}