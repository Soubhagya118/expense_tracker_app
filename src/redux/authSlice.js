import { createSlice } from "@reduxjs/toolkit";

const isLogin = localStorage.getItem('isLoggedIn') != null ? JSON.parse(localStorage.getItem('isLoggedIn')):[]

const authSlice = createSlice(
    {
     name:'Auth',
     initialState:{
        isSignUp:true,
        isLoggin:isLogin,
        userData:{},
        userId:''
     },
     reducers:{
        isSignUpReducerFn:(state,action)=>{
            state.isSignUp=action.payload;
            // localStorage.setItem("isSignUp",JSON.stringify(state.isSignUp))
        },

        isLogginReducerFn:(state,action)=>{
            state.isLoggin=action.payload;
            localStorage.setItem("isLoggedIn",JSON.stringify(state.isLoggin))
        },

        userIdReducerFn:(state,action)=>{
            state.userId=action.payload;
        },
        userDataReducerFn:(state,action)=>{
            state.userData =action.payload;
            console.log("userData",state.userData)

        }
     }

    }
);



export const {isSignUpReducerFn , isLogginReducerFn, userIdReducerFn,userDataReducerFn} =authSlice.actions
export default authSlice.reducer;