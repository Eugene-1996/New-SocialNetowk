import React, { FC }  from 'react';
import './App.css';
import Pages from './components/Pages/Pages';
import Navigation from './components/Navigation/Navigation';

import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { AuthActionsType, authUserThunk } from './redux/auth-reducer';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { AppReduxStateType } from './redux/redux-store';
import Preloader from './common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';


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

type MapDispatchToPropsType = {
  // authUserThunk: ()  => void
  initializeApp: () => void
}


type MapStateToPropsType = {
  initialized: boolean
}

type CommonTypeApp = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<CommonTypeApp>{

  componentDidMount() {
    this.props.initializeApp()
}

  render (){

    if(!this.props.initialized){
      return <Preloader/>
    }

    return (
  
       <div className='headnav'>
        <HeaderContainer /> 
        <Navigation 
        //  sideBar={props.state.sideBarData.sideBarData} 
        //  dispatch={props.dispatch}
        />
        <div className='maincontent'>
           <Pages 
        //     store={props.store}
        //  addPost={props.addPost} 
        //   addMessage={props.addMessage} 
        //   changeNewPost={props.changeNewPost} 
        //   changeNewMessage={props.changeNewMessage}  
          />
        </div>
      </div>
  );
  }
}

const mapStateToProps = (state: AppReduxStateType):MapStateToPropsType => ({
  initialized: state.app.initialized
})


export default compose<FC>(
  withRouter,
  connect(mapStateToProps,{initializeApp})
  )(App)

// export default compose<FC>(
//   connect(mapStateToProps, {authUserThunk})
// )(App)


    // "react-redux": "7.2.6",

    // "@types/react-redux": "7.1.22",
// 


