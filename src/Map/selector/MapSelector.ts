
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

  export const selectZoom = createSelector(
    selectDomain,
    (map) => map && map.zoom
  );

  export const selectPan = createSelector(
    selectDomain,
    (map) => map && map.pan
  );

  export const selectViewBoxX = createSelector(
    selectZoom,
    selectPan,
    (zoom, pan) => {
      const halfWidth = window.outerWidth / 2;
      const stepX = halfWidth - (halfWidth * (1 / zoom));

      return -halfWidth + stepX + pan.x / zoom;
    }
  );

  export const selectViewBoxY = createSelector(
    selectZoom,
    selectPan,
    (zoom, pan) => {
      const quarterHeight = window.outerHeight / 4;
      const heightStepFactor = window.outerHeight / (3/2);
      const stepY = heightStepFactor - (heightStepFactor * (1 / zoom));

      return -quarterHeight + stepY + pan.y / zoom;
    }
  );

  export const selectViewBoxWidth = createSelector(
    selectZoom,
    zoom => window.outerWidth * (1 / zoom)
  );

  export const selectViewBoxHeight = createSelector(
    selectZoom,
    zoom => window.outerHeight * (1 / zoom)
  );

  export const selectViewBox = createSelector(
    selectViewBoxX,
    selectViewBoxY,
    selectViewBoxWidth,
    selectViewBoxHeight,
    (x, y, width, height) => `${ x } ${ y } ${ width } ${ height }`
  );

  export const selectTile =
    (x: number, y: number) =>
      createSelector(
        selectTiles,
        (tiles) => tiles && tiles[x][y]
      );

  export const selectTileType =
    (x: number, y: number) =>
      createSelector(
        selectTile(x, y),
        (tile) => tile && tile.type
      );

  export const selectCity =
    (x: number, y: number) =>
      createSelector(
        selectTile(x, y),
        (tile) => tile && tile.city ? tile.city : null
      );

  export const selectResource =
    (x: number, y: number) =>
      createSelector(
        selectTile(x, y),
        (tile) => tile && tile.resource ? tile.resource : null
      );

  export const selectHasMountain =
    (x: number, y: number) =>
      createSelector(
        selectTile(x, y),
        (tile) => tile && tile.hasMountain ? tile.hasMountain : false
      );

}