import { createSlice } from "@reduxjs/toolkit";

// const dTheme= localStorage.getItem("darkTheme")!=null ?JSON.parse(localStorage.getItem("darkTheme")):false
const themeSlice =createSlice(
    {
        name:'theme',
        initialState:{
            isTheme:false,
            themeColour:''
        },
        reducers:{
            isThemeReducerFn:(state,action)=>{
                state.isTheme=action.payload;
                console.log("theme redu",state.isTheme);
                // localStorage.setItem("darkTheme",state?.isTheme)
            }
        }
    }
);

export const {isThemeReducerFn} = themeSlice.actions;
export default themeSlice.reducer;