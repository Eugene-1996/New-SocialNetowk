import React, { ChangeEvent } from 'react';
import style from './myposts.module.css'
import Post from './Post/Post';
import { addPostAC } from '../../../../redux/profile-reducer';
import { PostType } from '../../../../App';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import MyPostsReduxForm, { FormDataType } from './MyPostsFormRedux';

type MapDispatchToPropsType = {
  // setNewPost: (text: string) => void 
  addNewPost: (newPostBody: string) => void
}

type MapStateToPropsType = {
 
    posts: PostType[]
  
}

type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType



const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} description={p.description} />)




  

  // const onChangeHandler = (e : ChangeEvent<HTMLTextAreaElement>) => {
  //   const text = e.currentTarget.value 
  //   //  props.dispatch(setNewPostAC(text))
  //   props.setNewPost(text)
  // }
  // const addPostHandler = () => {
  //   // props.dispatch(addPostAC())
  //    props.addNewPost()  
  // }

  const addNewPostHandler = (formData: FormDataType) => {
    props.addNewPost(formData.newPostBody)
  }

  return (
    
      <div className={style.myposts}>
        <h4>My posts</h4>
        <div>
         <MyPostsReduxForm onSubmit={addNewPostHandler}/>
        </div>
      <div>
        {postsElements}
      </div>
    </div>
    
  );
};



export default MyPosts;