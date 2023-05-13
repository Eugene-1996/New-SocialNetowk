import { ActionsTypes } from "./redux-store"



let initialState: UsersReducerType = {
    usersData: [
    ],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const CHANGE_IS_FETCHING = 'CHANGE-IS-FETCHING'

type UsersReducerType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsTypes): UsersReducerType => {

    switch (action.type) {
        case FOLLOW_USER: {
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u ) }
        }
        case UNFOLLOW_USER: {
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u) }
        }
        case SET_USERS: {
            return {...state, usersData: [...action.users, ...state.usersData ]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.total}
        }
        case CHANGE_IS_FETCHING: {
            return {...state, isFetching: action.value}
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
    type : typeof SET_TOTAL_USERS_COUNT
    total: number
}

type ChangeIsFetchimgType = {
    type: typeof CHANGE_IS_FETCHING
    value: boolean
}


export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW_USER,
        userId
    } as const
}

export const unfollowAC = (userId: number): UnfollowACType => {
    return {
        type: UNFOLLOW_USER,
        userId
    } as const
}

export const setUsersAC = (users: UserType[] ) : SetUsersACType => {
    return {
        type: SET_USERS,
        users
    } as const
}


export const setCurrentPageAC = (currentPage: number ) : SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}


export const setTotalUsersCountAC = (total: number ) : SetTotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        total
    } as const
}

export const changeIsFetchingAC = (value: boolean) : ChangeIsFetchimgType => {
    return {
        type: CHANGE_IS_FETCHING,
        value
    }
}