import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'query',
    initialState: {
        images: '',
        page: 1
    },
    reducers: {
        imagesTopic(state, action){
            state.images = action.payload
        },
        galleryPage(state, action){
            state.page = action.payload
        }
    }
})


export const {imagesTopic, galleryPage} = slice.actions

export default slice.reducer