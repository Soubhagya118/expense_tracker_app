import { createSlice } from "@reduxjs/toolkit";

// const Itms = localStorage.getItem('items') != null ? JSON.parse(localStorage.getItem('items')):[]
const expenseSlice = createSlice(
    {
        name:"expenses",
        initialState:{
            items:[],
            totalAmount:0

        },
        reducers:{
            addItemReducerFn:(state,action)=>{
               state.items= action?.payload;
               state.totalAmount=state.items?.reduce((a,c)=>{
                return a+(+(c.money))},0);
            //    console.log("totalAmount",state.totalAmount)

                // localStorage.setItem("items",JSON.stringify(state?.items))

            },
            removeItemReducerFn:(state,action)=>{

               const removeEle=state.items.find(e=>e.id!==action?.payload);
               state.items= removeEle;
               state.totalAmount=state?.totalAmount- action?.payload?.money;
               localStorage.setItem("items",JSON.stringify(state?.items))
               console.log("remove the payload",removeEle)

            //    if(removeEle){


            //    }
            }


        }

});

export const {addItemReducerFn,removeItemReducerFn} = expenseSlice.actions;
export default expenseSlice.reducer;