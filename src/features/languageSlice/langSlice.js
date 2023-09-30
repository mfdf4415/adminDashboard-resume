import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    lang: "en"
}


export const languageSlice = createSlice({
    initialState,
    name: "language",
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }

})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer