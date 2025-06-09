import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name : "themes",
  initialState : {
    darkMode : false,
  },
  reducers:{
    toggleTheme : (state) =>{
      state.darkMode !== state.darkMode;
    }
  }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer