import React from 'react';
import style from './dialogs.module.css'
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import { DialogsType, MessagesType, StateType } from '../../../App';
import {  AppReduxStateType } from '../../../redux/redux-store';

import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { addMessageAC } from '../../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';


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
    // setNewMessage: (text: string) => void,
    addNewMessage: (newMessageBody: string) => void
}

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    // newMessage: string
    // isAuth: boolean
}


let MapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        // newMessage: state.dialogsData.newMessage,
        // isAuth: state.authData.isAuth
    }
}

// alert()


let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // setNewMessage: (text: string) => dispatch(setNewMessageAC(text)),
        addNewMessage: (newMessageBody: string) => dispatch(addMessageAC(newMessageBody))
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)


// const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(AuthRedirectComponent)

export default compose<React.FC>(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs)