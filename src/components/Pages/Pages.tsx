import React from 'react';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Settings from './Settings/Settings';
import { StateType } from '../../App';
import { ActionsTypes, AppReduxStateType, RootStoreType } from '../../redux/redux-store';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UserContainer';
import ProfileContainer from './Profile/ProfileContainer';

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
  
  // store: RootStoreType
  // addPost: () => void
  // changeNewPost: (newValue: string) => void
  // addMessage: () => void
  // changeNewMessage: (newValue: string) => void
}

const Pages = (props: PagesPropsType) => {
  return (
    <div >
      <Route path='/profile/:userId?' render={() => <ProfileContainer
  
      // store={props.store}
      // dispatch = {props.dispatch}
      // posts={props.state.profileData.posts}
        // addPost={props.addPost}
        // newPost={props.state.profileData.newPost}
      //   changeNewPost={props.changeNewPost} 
      />}
      />
      <Route path='/dialogs' render={() => <DialogsContainer 
              // store={props.store}
        // dispatch = {props.dispatch}
        // dialogs={props.state.dialogsData.dialogs}
        // messages={props.state.dialogsData.messages}
        // addMessage={props.addMessage}
        // newMessage={props.state.dialogsData.newMessage}
        // changeNewMessage={props.changeNewMessage} 
        />} />
      <Route path='/main' render={() => <Settings />} />
      <Route path='/users' render={() => <UsersContainer />} />
    </div>
  );
};

export default Pages;