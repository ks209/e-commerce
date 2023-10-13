import {combineReducers, configureStore} from "@reduxjs/toolkit"
import loginReducer from "../Features/loginSlice"
import cartReducers from "../Features/cartSlice"

const rootReducers = combineReducers({
    login: loginReducer,
    cartS: cartReducers,
})


export const store = configureStore({
    reducer : rootReducers,
})