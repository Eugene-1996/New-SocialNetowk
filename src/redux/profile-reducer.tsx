import { PostType } from "../App";
import { ActionsTypes } from "./redux-store";


type ProfileReducerType = {

    posts: PostType[]
    newPost: string
    profile: ProfileDataType
}

export type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}





const ADD_POST = 'ADD-POST'
const SET_NEW_POST = 'SET-NEW-POST'
const SET_USER_PROFILE = 'SET-NEW-PROFILE'

let initialState: ProfileReducerType = {
    posts: [
        {
            id: '1',
            name: 'Dima',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            description: 'hello guys'
        },
        {
            id: '2',
            name: 'Gena',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            description: 'yoyoy'
        },
        {
            id: '3',
            name: 'Geka',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            description: 'hello girls'
        },
        {
            id: '4',
            name: 'Valera',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            description: 'hello girls'
        },
        {
            id: '5',
            name: 'Sveta',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            description: 'hello girls'
        }
    ],
    newPost: '',
    profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'string',
        contacts: {
            github: 'string',
            vk: 'string',
            facebook: 'string',
            instagram: 'string',
            twitter: 'string',
            website: 'string',
            youtube: 'string',
            mainLink: 'string'
        },
        photos: {
            small: 'string',
            large: 'string'
        }
    }
}

const profileReducer = (state: ProfileReducerType = initialState, action: ActionsTypes) : ProfileReducerType => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: String(Math.floor(Math.random() * 33433)),
                name: 'Kiril',
                img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
                description: state.newPost
            }
            return  {...state, posts: [...state.posts, newPost], newPost: ''}
            // stateCopy.posts.push(newPost)
            // stateCopy.newPost = ''
            // return stateCopy
        
        case SET_NEW_POST: 
            return {...state, newPost: action.newPost}
            // stateCopy.newPost = action.newPost
            // return stateCopy
        case SET_USER_PROFILE: 
        return {...state, profile: action.profile}
        default:
            return state
    } 
    
}


    export default profileReducer

    type AddPostTypeAC = {
        type: typeof ADD_POST
    }

    type SetNewPostTypeAC = {
        type: typeof SET_NEW_POST
        newPost: string
    }

    type SetNewProfileTypeAC = {
        type : typeof SET_USER_PROFILE
        profile : ProfileDataType
    }

    export const addPostAC = () : AddPostTypeAC => ({ type: ADD_POST })

    export const setNewPostAC = (text: string) : SetNewPostTypeAC => ({ type: SET_NEW_POST, newPost: text })

    export const setUserProfileAC = (profile : ProfileDataType) : SetNewProfileTypeAC => ({ type: SET_USER_PROFILE, profile})


