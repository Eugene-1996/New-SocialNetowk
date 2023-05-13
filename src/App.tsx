import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import Navigation from './components/Navigation/Navigation';
import  { ActionsTypes, AppReduxStateType, RootStoreType } from './redux/redux-store';
import profileReducer from './redux/profile-reducer';
import sideBarReducer from './redux/sidebar-reducer';
import dialogsReducer from './redux/dialogs-reducer';
import HeaderContainer from './components/Header/HeaderContainer';


// export type StateReducersType = {
//   profileData: profileReducer,
// dialogsData: dialogsReducer,
// sideBarData: sideBarReducer
// }

export type AppStatePropsType = {
  // state: AppReduxStateType
  // value: {
  //   store: RootStoreType
  // } 
  // addPost: () => void
  // changeNewPost: (newValue: string) => void
  // addMessage:() => void
  // changeNewMessage: (newValue: string) => void
  // dispatch: (action: ActionsTypes) => void
}

export type StateType = {
  profileData: {
    posts: PostType[]
    newPost: string
  }
  dialogsData: {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessage: string
  }
  sideBarData: SideBarType[]
}

export type PostType = {
  id: string
  name: string
  img: string
  description: string
}
export type DialogsType = {
  id: string
  name: string
}

export type MessagesType = {
  id: string
  message: string
}

export type SideBarType = {
  id: string
  name: string
  img: string
}

function App(props: AppStatePropsType) {
  return (
      <div className='headnav'>
        <HeaderContainer />
        <Navigation 
        // sideBar={props.state.sideBarData.sideBarData} 
        // dispatch={props.dispatch}
        />
        <div className='maincontent'>
          <Pages 
            // store={props.store}
         // addPost={props.addPost} 
          // addMessage={props.addMessage} 
          // changeNewPost={props.changeNewPost} 
          // changeNewMessage={props.changeNewMessage}  
          />
        </div>
      </div>
  );
}

export default App;


