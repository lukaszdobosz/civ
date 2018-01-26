
export enum TileType {
  GRASS = 1,
  SAND = 2,
  SNOW = 3
}

export type Tile = Readonly<{
  type: TileType
}>;