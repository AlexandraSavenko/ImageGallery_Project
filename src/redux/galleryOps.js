import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos`

export const fetchImages = createAsyncThunk('images/getAll', async ({query="nature", page = 1, perPage = 12}, thunkAPI) => {
    try {
        const response = await axios.get('',
    {
        headers: {
          Authorization: `Client-ID _M2rXGxlX9xDK1iu9GI31ka_JVewW7yHFos3Jc0kt_k`,
          "Accept-Version": "v1",
        },
        params: {
          query,
          page,
          per_page: perPage,
        },
      }
)
console.log(response.data)
return response.data.results;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

    
})