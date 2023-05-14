import { Store, applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, { addPostAC, setNewPostAC, setUserProfileAC } from "./profile-reducer";
import dialogsReducer, { addMessageAC, setNewMessageAC } from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import thunkMiddleWare from 'redux-thunk'
import { changeFollowingInProgress,  changeIsFetching, followUser,   setCurrentPage,   setTotalUsersCount,  setUsers,  unFollowUser, usersReducer } from "./users-reducer";
import authReducer, { setAuthUserDataAC,  } from "./auth-reducer";


let rootReducer = combineReducers({
    profileData: profileReducer, 
    dialogsData: dialogsReducer, 
    sideBarData: sideBarReducer,
    usersData: usersReducer,
    authData: authReducer
})

// type RootReducerType = typeof rootReducer
export type AppReduxStateType = ReturnType< typeof rootReducer>

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof setNewPostAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof setNewMessageAC> | ReturnType<typeof unFollowUser> | ReturnType<typeof followUser> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof changeIsFetching> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof changeFollowingInProgress>

export type RootStoreType = Store<AppReduxStateType, ActionsTypes>


let store = createStore(rootReducer, 
    (applyMiddleware(thunkMiddleWare))
    )

// window.store = store

export default store