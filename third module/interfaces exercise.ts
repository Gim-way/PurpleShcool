interface Reply {
  shop: Shop
  id: number
  title: string
  owner: Owner[]
  info: Info
  tags: Tags[]
}

interface Shop {
  name: string
  address: string
  id: number
}

interface Owner {
  UserId: number
  id: number
  name: string
  biography: string
}

interface Info {
  description: string
  isWorked: boolean
}

interface Tags {
  name: string
  value: number
}
