import React, { ChangeEvent } from 'react';
import style from './messages.module.css'
import { DialogsType, MessagesType } from '../../../../App';
import { addMessageAC, setNewMessageAC } from '../../../../redux/dialogs-reducer';
import { ActionsTypes, RootStoreType } from '../../../../redux/redux-store';

type MessagesPropsType = {
    setNewMessage: (text: string) => void,
    addNewMessage: () => void
    newMessage: string
    // dialogs: DialogsType[]
    messages: MessagesType[]

}




const Messages = (props: MessagesPropsType) => {


    const messagesElements = props.messages.map(u => {
        return (
            <div key={u.id} className={style.message}><h5>{u.message}</h5></div>
        )
    })

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.setNewMessage(text)
    }

    const addMessage = () => {
        props.addNewMessage()
    }

    return (
        <div>
            <div className={style.allMessages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={changeHandler} value={props.newMessage}></textarea>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    );
};

export default Messages;