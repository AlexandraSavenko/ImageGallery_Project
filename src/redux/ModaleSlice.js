import { createSlice } from "@reduxjs/toolkit";

export const isOpen = state => state.modal.modalIsOpen;
export const selectedImage = state => state.modal.imageData;

const slice = createSlice({
    name: 'imageModal',
    initialState: {
        modalIsOpen: false,
        imageData: null,
    },
    reducers: {
        toggleModal(state, action){
            state.modalIsOpen = action.payload;
        },
        setSelectedImage(state, action){
            state.imageData = action.payload
        }
    }
})

export const {toggleModal, setSelectedImage} = slice.actions

export default slice.reducer