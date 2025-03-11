import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./galleryOps";

const slice = createSlice({
    name: 'imagesGallery',
    initialState: {
        loading: false,
fetchedImages: []
    },
    extraReducers: (builder) => {builder.addCase(fetchImages.pending, (state) => {state.loading = true}).addCase(fetchImages.fulfilled, (state,action) => {
        state.fetchedImages = action.payload;
        state.loading = false;
    })}
    // reducers: {
    //     saveFetchedImages(state, action){
    //         state.fetchedImages = action.payload
    //     }
    // }
})

export const {saveFetchedImages} = slice.actions

export default slice.reducer