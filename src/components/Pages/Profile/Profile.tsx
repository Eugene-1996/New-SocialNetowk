import React from 'react';
import style from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';




type PostsType = {
  posts: PostType[]
  newPost: string
  dispatch: (action: any) => void
  // addPost: () => void
  // changeNewPost: (newValue: string) => void
}

type PostType = {
  id: string
  name: string
  img: string
  description: string
}


const Profile = (props: PostsType) => {
  return (
    <div className={style.main}>
      <div className={style.banner}>
        <img src="https://vietnamdiscovery.com/wp-content/uploads/2021/01/Van-Long-Nature-Reserve.jpg" alt='error' />
      </div>
      <ProfileInfo />
      <MyPosts 
      dispatch = {props.dispatch}
      posts={props.posts}
        // addPost={props.addPost}
        newPost={props.newPost}
        // changeNewPost={props.changeNewPost} 
        />
    </div>

  );
};

export default Profile;