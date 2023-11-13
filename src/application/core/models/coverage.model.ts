export interface CoveragesType {
  title: string

  items: CoverageItemType[]
}

export interface CoverageItemType {
  _id: string
  title: string
  description: string
  icon: string

  cost: number
}
