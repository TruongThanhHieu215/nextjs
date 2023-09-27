// redux toolkit
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer.component"

export type RootState = ReturnType<typeof store.getState>

const middleWares: any = [process.env.NODE_ENV === "production" && logger].filter(Boolean)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
})
