import React, { ChangeEvent } from 'react';
import style from './myposts.module.css'
import Post from './Post/Post';

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



const MyPosts = (props: PostsType) => {

  const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} description={p.description} />)




  const onChangeHandler = (e : ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value 
    let action = {type: 'SET-NEW-POST', newPost : text}
     props.dispatch(action)
  }
  const addPostHandler = () => {
    props.dispatch({type: 'ADD-POST'})  }

    console.log(props.newPost)

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