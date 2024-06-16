import type { AuthToken, PaginatedUserRequest, UserGetById, UserListResponse, UserPositions, UserResponse } from "@/app/types";
import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<UserResponse, { userData: FormData }>({
      query: ({ userData }) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    getUsers: builder.query<UserListResponse, PaginatedUserRequest>({
      query: ({ page, count }) => ({
        url: `/users?count=${count}&page=${page}`,
        method: "GET",
      }),
    }),
    getUserById: builder.query<UserGetById, string>({
      query: id => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    getPositions: builder.query<UserPositions, void>({
      query: () => ({
        url: `/positions`,
        method: "GET",
      }),
    }),
    getToken: builder.query<AuthToken, void>({
      query: () => ({
        url: "/token",
        method: "GET",
      }),
    }),
  }),
})  


export const { useRegisterMutation, useGetUsersQuery, useLazyGetUsersQuery, useGetUserByIdQuery, useLazyGetUserByIdQuery, useGetPositionsQuery, useLazyGetPositionsQuery, useGetTokenQuery, useLazyGetTokenQuery } = userApi

export const { endpoints: { register, getUsers, getUserById, getPositions, getToken } } = userApi