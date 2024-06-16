import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: `https://frontend-test-assignment-api.abz.agency/api/v1`,
  prepareHeaders: headers => {
    const token = localStorage.getItem("token")

    if (token) headers.set("Token", token)

    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
})
