import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./galleryOps";

export const loadingResult = state => state.gallery.loading
export const errorResult = state => state.gallery.error

const slice = createSlice({
    name: 'imagesGallery',
    initialState: {
        loading: false,
        error: null,
        fetchedImages: []
    },
    extraReducers: (builder) => {builder
        .addCase(fetchImages.pending, (state) => {state.loading = true})
        .addCase(fetchImages.fulfilled, (state,action) => {
            state.fetchedImages.length > 0 ? state.fetchedImages = [...state.fetchedImages, ...action.payload] :
        state.fetchedImages = action.payload
        state.loading = false;})
        .addCase(fetchImages.rejected, (state, action) => {state.loading = false
            state.error = action.payload
        })}
})

export const {saveFetchedImages} = slice.actions

export default slice.reducer