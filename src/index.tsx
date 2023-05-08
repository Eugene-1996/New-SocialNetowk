
import './index.css';
import {store} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { StateType } from './App';


export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state} 
    dispatch={store.dispatch.bind(store)}
    // addPost={store.addPost.bind(store)} 
    // addMessage={store.addMessage.bind(store)} 
    // changeNewPost={store.changeNewPost.bind(store)} 
    // changeNewMessage={store.changeNewMessage.bind(store)}
    />,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState())


store.subscribe(rerenderEntireTree)

