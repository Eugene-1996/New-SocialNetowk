import { Dispatch } from "redux"
import { ActionsTypes } from "./redux-store"
import { userAPI } from "../api/API"
import axios from "axios"



let initialState: UsersReducerType = {
    usersData: [
    ],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 3]
}
export type UserType = {

    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean

}

export type DataPropsType = {
    items: UserType[]
    totalCount: number,
    error: string
}



const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const CHANGE_IS_FETCHING = 'CHANGE-IS-FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

type UsersReducerType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsTypes): UsersReducerType => {

    switch (action.type) {
        case FOLLOW_USER: {
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: false } : u) }
        }
        case UNFOLLOW_USER: {
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: true } : u) }
        }
        case SET_USERS: {
            return { ...state, usersData: [...action.users, ...state.usersData] }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.total }
        }
        case CHANGE_IS_FETCHING: {
            return { ...state, isFetching: action.value }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.value ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }

}

type FollowACType = {
    type: typeof FOLLOW_USER
    userId: number
}
type UnfollowACType = {
    type: typeof UNFOLLOW_USER
    userId: number
}

type SetUsersACType = {
    type: typeof SET_USERS
    users: UserType[]

}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number

}

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    total: number
}

type ChangeIsFetchingACType = {
    type: typeof CHANGE_IS_FETCHING
    value: boolean
}

type ChangeFollowingInProgressACType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    value: boolean
    userId: number
}


export const followUser = (userId: number): FollowACType => {
    return {
        type: FOLLOW_USER,
        userId
    } as const
}

export const unFollowUser = (userId: number): UnfollowACType => {
    return {
        type: UNFOLLOW_USER,
        userId
    } as const
}

export const setUsers = (users: UserType[]): SetUsersACType => {
    return {
        type: SET_USERS,
        users
    } as const
}


export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}


export const setTotalUsersCount = (total: number): SetTotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        total
    } as const
}

export const changeIsFetching = (value: boolean): ChangeIsFetchingACType => {
    return {
        type: CHANGE_IS_FETCHING,
        value
    } as const
}

export const changeFollowingInProgress = (value: boolean, userId: number): ChangeFollowingInProgressACType => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        value,
        userId
    } as const
}


// export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
//     return (dispatch: Dispatch) => {
//             console.log('shhh')
//             dispatch(changeIsFetching(true))
//             userAPI.getUsers(currentPage, pageSize)
//                 .then((data: DataPropsType) => {
//                     console.log(data.items, 'data')
//                     console.log('dsjhdhs')
//                     dispatch(changeIsFetching(false))
//                     dispatch(setUsers(data.items))
//                     dispatch(setTotalUsersCount(data.totalCount))
//                 })  
//     }
// }

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        // debugger

        dispatch(changeIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(changeIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            }
            )
    }
}

export const followThunk = (userId: number) => {
    // debugger
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(true, userId))
        userAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    console.log(response.data.resultCode)

                    dispatch(unFollowUser(userId))
                    dispatch(changeFollowingInProgress(false, userId))
                }
            })
    }

}

export const unFollowThunk = (userId: number) => {
    // debugger
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(true, userId))
        userAPI.unFollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followUser(userId))
                    dispatch(changeFollowingInProgress(false, userId))
                }
            })
    }

}








