import React from "react";
import { connect } from "react-redux";
import { AppReduxStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { UserType, changeIsFetchingAC, followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../../common/Preloader/Preloader";


type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    setUser: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (total: number) => void
    changeIsFetching: (value: boolean) => void
}

type UserPropsType = MapStateToProps & MapDispatchToProps

class UsersContainer extends React.Component<UserPropsType>{


    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                // console.log(response)
                this.props.changeIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })

    }


    // getUser = () => {
    //     if (this.props.users.length === 0) {

    //     }
    // }

    onPagedChanged = (currentPage: number) => {
        this.props.changeIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUser(response.data.items)
                    this.props.changeIsFetching(false)
            })
    }

    render() {

        // if(this.props.isFetching === false){

        // }

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                    onPagedChanged={this.onPagedChanged}
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
        isFetching: state.usersData.isFetching

    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        unFollowUser: (userId: number) => dispatch(followAC(userId)),
        followUser: (userId: number) => dispatch(unfollowAC(userId)),
        setUser: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUserCount: (total: number) => dispatch(setTotalUsersCountAC(total)),
        changeIsFetching: (value: boolean) => dispatch(changeIsFetchingAC(value))
    }
}



export default connect(MapStateToProps, MapDispatchToProps)(UsersContainer)
