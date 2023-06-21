import React from "react";
import { Dispatch } from "redux";
import { authAPI } from "../api/API";
import { AppActionsTypes, AppThunkType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";
import { initializedSuccessAC } from "./app-reducer";



const SET_USER_DATA = "SET-USER-DATA"

export type Nullable<T> = null | T 

export type authReducerType = {
    data: {
        id: number
        email: string
        login: string
    }
    isAuth: boolean
    resultCode: number
    messages: string[]
}

let initialState: authReducerType = {

    data: {
        id: 3,
        email: '',
        login: '',
    },
    isAuth: false,
    resultCode: 0,
    messages: [],


}

const authReducer = (state: authReducerType = initialState, action: AuthActionsType): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            // return { ...state, ...action.data, isAuth: true }
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }
}



// type setAuthUserDataACType = {
//     type: typeof SET_USER_DATA,
//     // data: DataUserType
//     data: {
//         id: number
//         email: string
//         login: string
//     }

// }

export type AuthActionsType = ReturnType<typeof setAuthUserDataAC> 

export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean)  => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login},
        isAuth 
        
    } as const
}

export default authReducer


export const authUserThunk = (): AppThunkType => {
    return (dispatch) => {
        
        return authAPI.getAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(data.data.id, data.data.email, data.data.login, true))
                }
            })
            // .finally(() => dispatch(initializedSuccessAC()))
    }
}


export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(authUserThunk())    
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}


export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataAC(0, '', '', false))    
        }
    })
}