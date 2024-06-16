import { userApi } from "@/app/api/userApi";
import { createListenerMiddleware } from "@reduxjs/toolkit";

export const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  matcher: userApi.endpoints.getToken.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    
    if (action.payload.token) {
      localStorage.setItem("token", action.payload.token)
    }
  }
})
listenerMiddleware.startListening({
  matcher: userApi.endpoints.getUserById.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    
    if (action.payload.success) {
      localStorage.setItem("user", action.payload.user.name)
    }
  }
})
listenerMiddleware.startListening({
  matcher: userApi.endpoints.register.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    
    if (action.payload.success) {
      localStorage.setItem("is_registered", action.payload.success.toString())
    }
  }
})