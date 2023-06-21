import React from "react";
import { AppThunkType } from "./redux-store";
import { authUserThunk } from "./auth-reducer";
import { log } from "console";



const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState: AppReducerType = {

    initialized: false 
}

type AppReducerType = {
    initialized: boolean 
}

const appReducer = (state: AppReducerType = initialState, action: AppActionsType): AppReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            // return { ...state, ...action.data, isAuth: true }
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export type AppActionsType = ReturnType<typeof initializedSuccessAC> 

export const initializedSuccessAC = ()  => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export default appReducer


export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(authUserThunk())
    Promise.all([promise])
    .then(() => {
    // console.log('initialize')
        dispatch(initializedSuccessAC())
    })
}