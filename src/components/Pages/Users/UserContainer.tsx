import React from "react";
import { connect } from "react-redux";
import { AppReduxStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { DataPropsType, UserType, changeFollowingInProgress,  changeIsFetching,  followThunk,  followUser,   getUsersThunkCreator,  setCurrentPage,   setTotalUsersCount, setUsers,  unFollowThunk,  unFollowUser,    } from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader/Preloader";
import {   userAPI } from "../../../api/API";


type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    
}

type MapDispatchToProps = {
    // unFollowUser: (userId: number) => void
    // followUser: (userId: number) => void
    // setUsers: (users: UserType[]) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (total: number) => void
    changeIsFetching: (value: boolean) => void
    // changeFollowingInProgress: (value: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

type UserPropsType = MapStateToProps & MapDispatchToProps

class UsersContainer extends React.Component<UserPropsType>{


    componentDidMount() {
        // debugger
        // this.props.changeIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         // console.log(response)
        //         this.props.changeIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }


    // getUser = () => {
    //     if (this.props.users.length === 0) {

    //     }
    // }


    onPagedChanged = (currentPage: number) => {
        // this.props.changeIsFetching(true)
        // this.props.setCurrentPage(currentPage)
        // userAPI.getUsers(currentPage, this.props.pageSize)
        //     .then((data: DataPropsType) => {
                
        //         this.props.setUsers(data.items)
        //         this.props.changeIsFetching(false)
        //     })
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize)
    }

    render() {

        // if(this.props.isFetching === false){

        // }

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    // followUser={this.props.followUser}
                    // unFollowUser={this.props.unFollowUser}
                    onPagedChanged={this.onPagedChanged}
                    // changeFollowingInProgress={this.props.changeFollowingInProgress}
                    followingInProgress= {this.props.followingInProgress}
                    followThunk= {this.props.followThunk}
                    unFollowThunk= {this.props.unFollowThunk}
                />
            </>
        )
    }
}



let MapStateToProps = (state: AppReduxStateType): MapStateToProps => {
    return {
        users: state.usersData.usersData,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress

    }
}

// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         unFollowUser: (userId: number) => dispatch(follow(userId)),
//         followUser: (userId: number) => dispatch(unfollow(userId)),
//         setUsers: (users: UserType[]) => dispatch(setUsers(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
//         setTotalUsersCount: (total: number) => dispatch(setTotalUsersCount(total)),
//         changeIsFetching: (value: boolean) => dispatch(changeIsFetching(value)),
//         changeFollowingInProgress: (value: boolean, userId: number) => dispatch(changeFollowingInProgress(value, userId)),
//         // getUsersThunkCreator: (currentPage: number, pageSize: number) => (dispatch: Dispatch) => ,
//         // getUsers: getUsersThunkCreator 
//         // getUsersThunkCreator: getUsersThunkCreator
//     }
// }



export default connect(MapStateToProps, 
    {
        // unFollowUser: unFollowUser,
        // followUser: followUser,
        // setUsers: setUsers,
        // setCurrentPage: setCurrentPage,
        // setTotalUsersCount: setTotalUsersCount,
        changeIsFetching: changeIsFetching,
        // changeFollowingInProgress: changeFollowingInProgress,
        getUsersThunkCreator: getUsersThunkCreator,
        followThunk: followThunk,
        unFollowThunk: unFollowThunk

    })(UsersContainer)
