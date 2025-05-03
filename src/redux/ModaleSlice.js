import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'imageModal',
    initialState: {
        modalIsOpen: false,
        imageData: null,
    },
    reducers: {
        openModal(state, action){
            state.modalIsOpen = action.payload;
        },
        setSelectedImage(state, action){
            state.imageData = action.payload
        }
    }
})

export const {openModal, setSelectedImage} = slice.actions

export default slice.reducer