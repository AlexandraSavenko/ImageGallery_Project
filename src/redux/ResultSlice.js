import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'imagesGallery',
    initialState: {
fetchedImages: []
    },
    reducers: {
        saveFetchedImages(state, action){
            state.fetchedImages = action.payload
        }
    }
})

export const {saveFetchedImages} = slice.actions

export default slice.reducer