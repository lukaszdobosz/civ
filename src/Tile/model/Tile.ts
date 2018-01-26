
export enum TileType {
  GRASS = 1,
  SAND = 2,
  SNOW = 3
}

export enum TileResource {
  FOREST = 1,
  GOLD = 2
}

export type Tile = Readonly<{
  type: TileType,
  resource: TileResource | null
}>;