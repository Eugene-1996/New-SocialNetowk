import { Store, applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, { ProfileActionsType, addPostAC, setUserProfileAC, setUserStatusAC } from "./profile-reducer";
import dialogsReducer, { DialogsActionsType, addMessageAC } from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import thunkMiddleWare, { ThunkAction } from 'redux-thunk'
import { UsersActionsType, changeFollowingInProgress,  changeIsFetching, followUser,   setCurrentPage,   setTotalUsersCount,  setUsers,  unFollowUser, usersReducer } from "./users-reducer";
import authReducer, { AuthActionsType, setAuthUserDataAC,  } from "./auth-reducer";
//import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profileData: profileReducer, 
    dialogsData: dialogsReducer, 
    sideBarData: sideBarReducer,
    usersData: usersReducer,
    authData: authReducer,
    //form: formReducer,
    app: appReducer
})

// type RootReducerType = typeof rootReducer
export type AppReduxStateType = ReturnType< typeof rootReducer>

export type AppActionsTypes = DialogsActionsType | ProfileActionsType |  UsersActionsType  | AuthActionsType

export type RootStoreType = Store<AppReduxStateType, AppActionsTypes>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppReduxStateType, unknown, any>
let store = createStore(rootReducer, 
    (applyMiddleware(thunkMiddleWare))
    )

// window.store = store

export default store