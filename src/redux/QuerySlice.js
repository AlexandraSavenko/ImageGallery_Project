import { createSlice } from "@reduxjs/toolkit";

export const queryParams = state => state.query.params

const slice = createSlice({
    name: 'query',
    initialState: {
        params: 
        {query: '',
        page: 1
    }
        
    },
    reducers: {
        imagesTopic(state, action){
            state.params.query = action.payload;
            console.log(state.params.query)
        },
        galleryPage(state, action){
            state.params.page = action.payload
        }
    }
})


export const {imagesTopic, galleryPage} = slice.actions

export default slice.reducer