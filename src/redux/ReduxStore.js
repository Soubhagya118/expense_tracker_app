import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import expenseSlice from "./expenseSlice";
import themeSlice from "./themeSlice";
import cartReducer from "./cartReducer";

const ReduxStore = configureStore(
    {
        reducer:{
            Auth:authSlice,
            expenses:expenseSlice,
            theme:themeSlice,
            cart:cartReducer
        }
    }
);

export default ReduxStore;