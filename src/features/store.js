import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "./languageSlice/langSlice"

export const store = configureStore({
  reducer: {
    language:languageReducer
  },
})

