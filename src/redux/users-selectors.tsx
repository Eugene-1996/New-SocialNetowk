import { AppReduxStateType } from "./redux-store"

export const getUsers = (state: AppReduxStateType) => {
    return state.usersData.usersData
}

export const getPageSize = (state: AppReduxStateType) => {
    return state.usersData.pageSize
}

export const getTotalUsersCount = (state: AppReduxStateType) => {
    return state.usersData.totalUsersCount
}


export const getCurrentPage = (state: AppReduxStateType) => {
    return state.usersData.currentPage
}

export const getIsFetching = (state: AppReduxStateType) => {
    return state.usersData.isFetching
}

export const getFollowingInProgress = (state: AppReduxStateType) => {
    return state.usersData.followingInProgress
}
