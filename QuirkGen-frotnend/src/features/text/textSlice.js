import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name:"input",
  initialState: "",
  reducers:{
    setGenerateText(state,action){
      return action.payload
    }
  }
})

export const {setGenerateText, setResponseText} = textSlice.actions

export default textSlice.reducer