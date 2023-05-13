import React from 'react';
import style from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import { ActionsTypes, AppReduxStateType, RootStoreType } from '../../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileDataType } from '../../../redux/profile-reducer';




type ProfileType = {
  userProfile: ProfileDataType
}



const Profile = (props: ProfileType) => {
  return (
    <div className={style.main}>
      <div className={style.banner}>
        <img src="https://vietnamdiscovery.com/wp-content/uploads/2021/01/Van-Long-Nature-Reserve.jpg" alt='error' />
      </div>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer 
      
      // store={props.store}
      // dispatch = {props.dispatch}
      // posts={props.posts}
      //   addPost={props.addPost}
      //   newPost={props.newPost}
      //   changeNewPost={props.changeNewPost} 
        />
    </div>

  );
};

export default Profile;