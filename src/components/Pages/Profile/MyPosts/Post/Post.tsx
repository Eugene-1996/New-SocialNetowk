import React from 'react';
import style from './post.module.css'


type PostType = {
    id: string
    name: string
    img: string
    description: string
  }

const Post = (props: PostType) => {
    return (
        <div className={style.posts}>
            <div key={props.id}>
                <h5>{props.name}</h5>
                <img src={props.img} alt='error' />
                <span>{props.description}</span>
            </div>
        </div>
    );
};
export default Post;