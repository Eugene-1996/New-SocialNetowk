import React, { ChangeEvent } from 'react';
import style from './myposts.module.css'
import Post from './Post/Post';
import { addPostAC, setNewPostAC } from '../../../../redux/profile-reducer';
import { ActionsTypes } from '../../../../redux/redux-store';
import { PostType } from '../../../../App';

type MapDispatchToPropsType = {
  setNewPost: (text: string) => void 
  addNewPost: () => void
}

type MapStateToPropsType = {
 
    posts: PostType[]
    newPost: string
  
}

type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType



const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} description={p.description} />)




  

  const onChangeHandler = (e : ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value 
    //  props.dispatch(setNewPostAC(text))
    props.setNewPost(text)
  }
  const addPostHandler = () => {
    // props.dispatch(addPostAC())
     props.addNewPost()  
  }


  return (
    <div>
      <div className={style.myposts}>
        <h4>My posts</h4>
        <div>
          <textarea onChange={onChangeHandler} value={props.newPost}></textarea>
        </div>
        <button onClick={addPostHandler}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;