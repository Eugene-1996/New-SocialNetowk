import React, { ChangeEvent } from 'react';
import style from './messages.module.css'
import { MessagesType } from '../../../../App';

import { AddMessageReduxForm, FormDataType } from './MessagesReduxForm';

type MessagesPropsType = {
    setNewMessage: (text: string) => void,
    addNewMessage: (newMessageBody: string) => void
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

    // const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.setNewMessage(text)
    // }

    // const addMessage = () => {
    //     props.addNewMessage()
    // }

    const addNewMessage = (formData: FormDataType) => {
        
        props.addNewMessage(formData.newMessageBody)

    }

    return (
        <>
        <div>
            <div className={style.allMessages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
        </>
    );
};




export default Messages;