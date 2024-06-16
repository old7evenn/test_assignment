import { createSlice } from "@reduxjs/toolkit";
import { AuthToken, User, UserListResponse } from "@/app/types";
import { userApi } from "@/app/api/userApi";
import { RootState } from "@/app/store";

export interface InitialState {
  user: User | null
  users: User[] | null
  data: UserListResponse | null
  token: AuthToken | null
}

const initialState: InitialState = {
  user: null,
  users: null,
  data: null,
  token: null
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          state.user = action.payload
        },
      )
      .addMatcher(
        userApi.endpoints.getUsers.matchFulfilled,
        (state, action) => {
          state.data = action.payload
        },
      )
      .addMatcher(
        userApi.endpoints.getToken.matchFulfilled,
        (state, action) => {
          state.token = action.payload
        },
      )
     
  }
})

export const { logout, resetUser } = slice.actions
export default slice.reducer

export const selectUser = (state: RootState) => state.user.user
export const selectUsers = (state: RootState) => state.user.data
export const selectToken = (state: RootState) => state.user.token