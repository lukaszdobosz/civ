
import { Resource } from 'Resource/model';
import { City } from 'City/model';

export enum TileType {
  SEA = 0,
  GRASS = 1,
  SAND = 2,
  SNOW = 3,
  MOUNTAIN = 4
}

export enum TileResource {
  FOREST = 1,
  GOLD = 2
}

export type Tile = Readonly<{
  type: TileType,
  resource?: Resource,
  city?: City
}>;