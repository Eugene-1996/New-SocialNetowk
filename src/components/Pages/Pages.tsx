import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Settings from './Settings/Settings';
import { StateType } from '../../App';

// type PostsType = {
//     Posts : PostType[]
//   }

//   type PostType = {
//     id: string
//     name : string
//     img: string
//     description: string
//   }


type PagesPropsType = {
  state: StateType
  dispatch: (action: any) => void
  // addPost: () => void
  // changeNewPost: (newValue: string) => void
  // addMessage: () => void
  // changeNewMessage: (newValue: string) => void
}

const Pages = (props: PagesPropsType) => {
  return (
    <div >
      <Route path='/profile' render={() => <Profile
      dispatch = {props.dispatch}
      posts={props.state.profileData.posts}
        // addPost={props.addPost}
        newPost={props.state.profileData.newPost}
      //   changeNewPost={props.changeNewPost} 
      />}
      />
      <Route exact path='/dialogs' render={() => <Dialogs 
        dispatch = {props.dispatch}
        dialogs={props.state.dialogsData.dialogs}
        messages={props.state.dialogsData.messages}
        // addMessage={props.addMessage}
        newMessage={props.state.dialogsData.newMessage}
        // changeNewMessage={props.changeNewMessage} 
        />} />
      <Route path='/main' render={() => <Settings />} />
    </div>
  );
};

export default Pages;