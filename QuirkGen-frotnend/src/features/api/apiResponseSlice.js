import { createSlice } from "@reduxjs/toolkit";
import { fetchCombinedData } from "./apiActions";

const responseSlice = createSlice({
    name:'apiResponse',
    initialState:{
        combinedData:{
            whatsapp:"",
            instagram:"",
            facebook:"",
            email:"",
            twitter:"",
            linkedin:"",
        },
        loading:false,
        error:null
    },
    reducers:{
        setResponseText(state,action){
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCombinedData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCombinedData.fulfilled, (state, action) => {
            state.combinedData = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchCombinedData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
})

export const {setResponseText} = responseSlice.actions

export default responseSlice.reducer