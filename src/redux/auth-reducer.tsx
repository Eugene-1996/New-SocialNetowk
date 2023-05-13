import React from "react";
import { ActionsTypes } from "./redux-store";



const SET_USER_DATA = "SET-USER-DATA"



export type authReducerType = {
    data : {
        id: number
        email: string
        login: string
       }
     resultCode: number
     messages: string[]  
     isAuth: boolean
}

let initialState: authReducerType = {
    
    data : {
        id: 3,
        email: '',
        login: '',
       },
       resultCode: 0,
       messages: [],
        isAuth: false


}

const authReducer = (state: authReducerType = initialState, action: ActionsTypes): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            // return { ...state, ...action.data, isAuth: true }
            return {
                ...state,
                data:action.data,
                isAuth: true
            }
        default:
            return state
    }
}



type setAuthUserDataACType = {
    type: typeof SET_USER_DATA,
    // data: DataUserType
    data: {
        id: number
    email: string
    login: string
    }
    
}

export const setAuthUserDataAC = (id: number, email: string, login: string): setAuthUserDataACType => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login }
    } as const
}

export default authReducer