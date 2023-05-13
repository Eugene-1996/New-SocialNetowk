import { DialogsType, MessagesType } from "../App"
import { ActionsTypes } from "./redux-store"


type DialogsReducerType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessage: string
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE'


let initialState: DialogsReducerType = {
    dialogs: [
        {
            id: '1',
            name: 'Yura'
        },
        {
            id: '2',
            name: 'Pasha'
        },
        {
            id: '3',
            name: 'Oleg'
        },
        {
            id: '4',
            name: 'Kiril'
        }
    ],
    messages: [
        {
            id: '1',
            message: 'Hello Kitty'
        },
        {
            id: '2',
            message: 'Hoi'
        },
        {
            id: '3',
            message: 'Bye'
        },
        {
            id: '4',
            message: 'Lol'
        }
    ],
    newMessage: ''
}

const dialogsReducer = (state: DialogsReducerType = initialState, action: ActionsTypes): DialogsReducerType => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: String(Math.floor(Math.random() * 12234)),
                message: state.newMessage
            }
            return  { ...state, newMessage: '', messages: [...state.messages, newMessage]}
            // stateCopy.messages = [...stateCopy.messages]
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessage = ''
            // return stateCopy
        
        case SET_NEW_MESSAGE: 
           return { ...state, newMessage: action.newMessage }
            // stateCopy.newMessage = action.newMessage
            // return stateCopy
        
        default:
            return state
    }
}

export default dialogsReducer


type AddPostAC = {
    type: typeof ADD_MESSAGE
}

type SetNewPostAC = {
    type: typeof SET_NEW_MESSAGE
    newMessage: string
}

export const addMessageAC = (): AddPostAC => ({ type: ADD_MESSAGE })

export const setNewMessageAC = (text: string): SetNewPostAC => ({ type: SET_NEW_MESSAGE, newMessage: text })
