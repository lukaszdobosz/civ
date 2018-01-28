
export enum ResourceType {
  FOREST = 1,
  GOLD = 2
}

export type Resource = Readonly<{
  type: ResourceType
}>;