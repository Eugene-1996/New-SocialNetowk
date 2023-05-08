import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

type AppStatePropsType = {
  state: StateType
  // addPost: () => void
  // changeNewPost: (newValue: string) => void
  // addMessage:() => void
  // changeNewMessage: (newValue: string) => void
  dispatch: (action: any) => void
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
    <BrowserRouter>
      <div className='headnav'>
        <Header />
        <Navigation sideBar={props.state.sideBarData}/>
        <div className='maincontent'>
          <Pages state={props.state} 
            dispatch={props.dispatch}
         // addPost={props.addPost} 
          // addMessage={props.addMessage} 
          // changeNewPost={props.changeNewPost} 
          // changeNewMessage={props.changeNewMessage}  
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


