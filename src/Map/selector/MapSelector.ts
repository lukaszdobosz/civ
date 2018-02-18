
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
      const halfWidth = window.innerWidth / 2;
      const stepX = halfWidth - (halfWidth / zoom);

      return -halfWidth + stepX + pan.x / zoom;
    }
  );

  export const selectViewBoxY = (tileSize) => createSelector(
    selectSize,
    selectZoom,
    selectPan,
    (size, zoom, pan) => {
      const halfHeight = window.innerHeight / 2;
      const stepY = halfHeight - (halfHeight / zoom);

      const mapHalfHeight = size * tileSize / 2;

      return -halfHeight + stepY + mapHalfHeight + pan.y / zoom;
    }
  );

  export const selectViewBoxWidth = createSelector(
    selectZoom,
    zoom => window.innerWidth / zoom
  );

  export const selectViewBoxHeight = createSelector(
    selectZoom,
    zoom => window.innerHeight / zoom
  );

  export const selectViewBox = (tileSize) => createSelector(
    selectViewBoxX,
    selectViewBoxY(tileSize),
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