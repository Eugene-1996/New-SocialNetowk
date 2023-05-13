import { Store, applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, { addPostAC, setNewPostAC, setUserProfileAC } from "./profile-reducer";
import dialogsReducer, { addMessageAC, setNewMessageAC } from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import thunkMiddleWare from 'redux-thunk'
import { changeIsFetchingAC, followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer } from "./users-reducer";
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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof setNewPostAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof setNewMessageAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof followAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof changeIsFetchingAC> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setAuthUserDataAC>

export type RootStoreType = Store<AppReduxStateType, ActionsTypes>


let store = createStore(rootReducer, 
    (applyMiddleware(thunkMiddleWare))
    )



export default store