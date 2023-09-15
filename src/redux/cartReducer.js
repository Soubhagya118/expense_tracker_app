import { createSlice } from "@reduxjs/toolkit";

let cartData= localStorage.getItem('cart') !=null ? JSON.parse(localStorage.getItem('cart')) :[]
// let totalCartP= localStorage.getItem('totalCart') != null ? JSON.parse(localStorage.getItem('totalCart')) :0

const cartReducer =createSlice(
    {
        name:'cart',
        initialState:{
            carts:cartData,
            // totalCartAmount:0 ,//totalCartP,
            isCart:false
        },
        reducers:{
            addToCartReducerFn:(state,action)=>{
                console.log("action.payload",action.payload.id);
                let findCartEleInd = state.carts?.findIndex(e=>e.id==action.payload.id);
                let findCartEle= state.carts[findCartEleInd]
                if(!findCartEle){
                    state.carts.push(action.payload);
                    // state.totalCartAmount= state.carts.reduce((a,c)=>a+(+c.money *(+c.quantity)),0);
                    // localStorage.setItem("totalCart",JSON.stringify(state.totalCartAmount));
                    localStorage.setItem("cart",JSON.stringify(state.carts))

                }else{
                findCartEle={...findCartEle,quantity:findCartEle.quantity+action.payload.quantity};
                state.carts=[...state.carts];
                state.carts[findCartEleInd]=findCartEle;

                // state.totalCartAmount= state.carts.reduce((a,c)=>{return a+(+c.money *(+c.quantity))},0);
                // localStorage.setItem("totalCart",JSON.stringify(state.totalCartAmount));
                localStorage.setItem("cart",JSON.stringify(state.carts))

                }
            },
            cartOnReducerFn:(state,action)=>{
                state.isCart=action.payload
            },
            removeReducerFn:(state,action)=>{
                let findCartEleInd = state.carts?.findIndex(e=>e.id==action.payload.id);
                let findCartEle= state.carts[findCartEleInd];
                
const expenseItems=action.payload.expenseItems?.find(e=>e.id == action.payload.id);
if(!expenseItems){
    console.log("")
    state.carts = state.carts?.filter(e=>e.id!==action.payload.id);
    localStorage.setItem("cart",JSON.stringify(state.carts));

}

             else if(findCartEle.quantity>1){
                findCartEle={...findCartEle,quantity:findCartEle.quantity-action.payload.quantity};
                state.carts=[...state.carts];
                state.carts[findCartEleInd]=findCartEle;

                 state.totalCartAmount= state.carts.reduce((a,c)=>{return a+(+c.money *(+c.quantity))},0);
                 state.totalCartAmount=state.totalCartAmount-action.payload.money
                 localStorage.setItem("totalCart",JSON.stringify(state.totalCartAmount));

                localStorage.setItem("cart",JSON.stringify(state.carts))
              }
              else if(findCartEle.quantity==1){
                state.carts = state.carts?.filter(e=>e.id!==action.payload.id);
                state.totalCartAmount= state.carts.reduce((a,c)=>{return a+(+c.money *(+c.quantity))},0);
                state.totalCartAmount=state.totalCartAmount-action.payload.money
                localStorage.setItem("totalCart",JSON.stringify(state.totalCartAmount));
                
                localStorage.setItem("cart",JSON.stringify(state.carts));

              }
            

            }
        }
    }
);
export const {addToCartReducerFn,cartOnReducerFn,removeReducerFn}=cartReducer.actions;
export default cartReducer.reducer