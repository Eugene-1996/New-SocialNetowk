import React, { ChangeEvent } from 'react';
import style from './myposts.module.css'
import Post from './Post/Post';
import { addPostAC } from '../../../../redux/profile-reducer';
import {  AppReduxStateType, RootStoreType } from '../../../../redux/redux-store';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PostType } from '../../../../App';



type MapDispatchToPropsType = {
//   setNewPost: (text: string) => void 
addNewPost: (newPostBody: string) => void
}

type MapStateToPropsType = {
    posts: PostType[]
    // newPost: string
}



let MapStateToProps = (state: AppReduxStateType) : MapStateToPropsType => {
    return {
        posts: state.profileData.posts,
        // newPost: state.profileData.newPost
    }
}




let MapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        // setNewPost: (text: string) => dispatch(setNewPostAC(text)),
        addNewPost: (newPostBody: string) => dispatch(addPostAC(newPostBody))
    }
}
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
