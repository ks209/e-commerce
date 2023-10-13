import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const logInSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{ 
        logedIn: (state, action)=>{
            state.isLogin = true
            console.log("logedIn triggered")
        },

        logedOut:(state,action)=>{
            state.isLogin = false
        }
    }
})

export const logInActions = logInSlice.actions

export default logInSlice.reducer

