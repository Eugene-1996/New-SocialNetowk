import React from 'react';
import style from './dialogs.module.css'
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import { DialogsType, MessagesType } from '../../../App';


type DialogsPropsType = {
    dialogs : DialogsType[]
    messages: MessagesType[]
    newMessage: string
    // changeNewMessage: (newValue: string) => void
    // addMessage:() => void
    dispatch: (action: any) => void
  }


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.main}>
            <DialogItem dialogs={props.dialogs}/>
            <Messages messages={props.messages} 
            newMessage={props.newMessage} 
            dispatch={props.dispatch}
            // addMessage={props.addMessage} 
            // changeNewMessage={props.changeNewMessage}
            />
        </div>
    )
};

export default Dialogs;