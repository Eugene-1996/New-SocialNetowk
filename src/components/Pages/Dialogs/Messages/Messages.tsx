import React, { ChangeEvent } from 'react';
import style from './messages.module.css'
import { MessagesType } from '../../../../App';

type MessagesPropsType = {
    messages: MessagesType[]
    newMessage: string
    // changeNewMessage: (newValue: string) => void
    // addMessage:() => void
    dispatch: (action: any) => void

}



const Messages = (props: MessagesPropsType) => {

    const messagesElements = props.messages.map(u => {
        return (
            <div key={u.id} className={style.message}><h5>{u.message}</h5></div>
        )
    })

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        console.log(message)
        props.dispatch({type: 'SET-NEW-MESSAGE', newMessage : message})
    }

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
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