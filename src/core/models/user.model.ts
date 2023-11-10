import {FetchStateType} from './app.model'

export interface UserEntity {
  dni: string
  phone: string
  plate: string

  name: string
  email: string
}

export interface UserPlanEntity {}

export interface UserGetDataType {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserStore {
  user: UserEntity | null
  stateLoadingFetch: {
    getUserState: FetchStateType
  }
}
