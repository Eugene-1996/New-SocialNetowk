import React from 'react';
import { UserType } from '../../../redux/users-reducer';
import styles from './users.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../../api/API';



type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    // unFollowUser: (userId: number) => void
    // followUser: (userId: number) => void
    onPagedChanged: (currentPage: number) => void
    // changeFollowingInProgress: (value: boolean, userId: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}



const Users = (props: UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }





    return (
        <div>
            <div>Hello</div>
            <div>
                {pages.map((p, index) => {
                    return (
                        <span key={index} onClick={() => props.onPagedChanged(p)} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                    )
                })}
            </div>
            {/* <div>
                    <button onClick={this.getUser}>GetUsers</button>
                </div> */}
            {props.users.map(u => <div key={u.id}>
                <div>{u.name}</div>
                <div className={styles.profileImage}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : u.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png' : u.photos.large} alt='error'></img>
                    </NavLink>
                </div>
                {/* <div>
                        {!u.followed 
                            ? <button onClick={() => { props.followUser(u.id) }}>UnfollowedTrue</button>
                            : <button onClick={() => { props.unFollowUser(u.id) }}>FollowedFalse</button>
                        }
                    </div> */}
                <div>
                    {u.followed

                        ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                            props.unFollowThunk(u.id)

                            // props.changeFollowingInProgress(true, u.id)
                            // userAPI.unFollowUser(u.id)
                            //     .then(response => {
                            //         if (response.data.resultCode === 0) {
                            //             props.unFollowUser(u.id)
                            //             props.changeFollowingInProgress(false, u.id)
                            //         }
                            //     })




                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some( id=> id === u.id)} onClick={() => {
                            props.followThunk(u.id)
                            // props.changeFollowingInProgress(true, u.id)
                            // userAPI.followUser(u.id)
                            //     .then(response => {
                            //         if (response.data.resultCode === 0) {
                            //             props.followUser(u.id)
                            //             props.changeFollowingInProgress(false, u.id)
                            //         }
                            //     })

                        }}>Follow</button>}
                </div>

            </div>)}
        </div>
    );
};

export default Users;