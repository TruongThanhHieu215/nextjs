// redux toolkit
import { Middleware, configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer.component"

export type RootState = ReturnType<typeof store.getState>

const middleWares: Middleware[] = process.env.NODE_ENV === "production" ? [logger] : []

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
})
