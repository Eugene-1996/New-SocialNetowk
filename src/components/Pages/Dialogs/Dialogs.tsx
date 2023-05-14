import React from 'react';
import style from './dialogs.module.css'
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import { DialogsType, MessagesType } from '../../../App';
import { ActionsTypes, RootStoreType } from '../../../redux/redux-store';
import { Redirect } from 'react-router-dom';


// type DialogsPropsType = {
//     // dialogs : DialogsType[]
//     // messages: MessagesType[]
//     // newMessage: string
//     // changeNewMessage: (newValue: string) => void
//     // addMessage:() => void
//     // dispatch: (action: ActionsTypes) => void
//     // store: RootStoreType

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

type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType



const Dialogs = (props: DialogsPropsType) => {


    if(props.isAuth === false) return <Redirect to={'/login'}/>

    return (


        <div className={style.main}>
            <DialogItem dialogs={props.dialogs}
                
                // dialogs={props.dialogs}
            />
            <Messages 
            newMessage={props.newMessage}
            messages={props.messages}
            setNewMessage={props.setNewMessage}
            addNewMessage = {props.addNewMessage}
                // messages={props.messages}
                // newMessage={props.newMessage}
                // dispatch={props.dispatch}
            // addMessage={props.addMessage} 
            // changeNewMessage={props.changeNewMessage}
            />
        </div>
    )
};

export default Dialogs;