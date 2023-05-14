import React from 'react';
import style from './dialogs.module.css'
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import { DialogsType, MessagesType, StateType } from '../../../App';
import { ActionsTypes, AppReduxStateType, RootStoreType } from '../../../redux/redux-store';

import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageAC, setNewMessageAC } from '../../../redux/dialogs-reducer';


// type DialogsPropsType = {
//     // dialogs : DialogsType[]
//     // messages: MessagesType[]
//     // newMessage: string
//     // changeNewMessage: (newValue: string) => void
//     // addMessage:() => void
//     // dispatch: (action: ActionsTypes) => void
//     // store: RootStoreType

// }



// const DialogsContainer = (props: DialogsPropsType) => {

    

//     return (
        
//         <div>
//         <Dialogs/>
//         </div>
//     )
// };




// const mapStateProps = (state: AppReduxStateType): mapStatePropsType  => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

type MapDispatchToPropsType = {
    setNewMessage: (text: string) => void,
    addNewMessage: () => void
}

type MapStateToPropsType = {
        dialogs: DialogsType[]
        messages: MessagesType[]
        newMessage: string
        isAuth: boolean
}


let MapStateToProps = (state: AppReduxStateType) : MapStateToPropsType => {
    return {
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        newMessage: state.dialogsData.newMessage,
        isAuth: state.authData.isAuth
    }
}

// alert()


let MapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        setNewMessage : (text: string) => dispatch(setNewMessageAC(text)),
        addNewMessage: () => dispatch(addMessageAC())
    }
}
const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer;