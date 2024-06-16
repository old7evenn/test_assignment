
export type User = {
  id: number
  email: string
  name: string
  phone: string
  position: string
  position_id: number
  registration_timestamp: number
  photo: File | null 
}

export type UserGetById = {
  success: boolean  
  user: Omit<User, "registration_timestamp">
}

export type AuthToken = {
  token: string
  success: boolean
}

export type SimplifiedUser = Omit<User, "registration_timestamp" | "id" | "position"> 

export type UserCard = Omit<User, "registration_timestamp" | "id" | "position_id" | "photo"> & {
  photo: string
}

export type UserListResponse = {
  success: true
  total_pages: number
  total_users: number
  count: number
  page: number
  links: {
    next_url: string | null
    prev_url: string | null
  }
  users: (Omit<User, "photo"> & { photo: string })[]
}

export type UserResponse = {
  success: boolean
  user_id: number
  message: string
}

export type PaginatedUserRequest = {
  count: number
  page: number
}

export type UserPositions = {
  success: boolean
  positions: {
    id: number,
    name: string
  }[]
}