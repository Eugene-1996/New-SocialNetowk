import { Dispatch } from "redux";
import { PostType } from "../App";
import { profileAPI } from "../api/API";
import { AppActionsTypes } from "./redux-store";


type ProfileReducerType = {

    posts: PostType[]
    profile: ProfileDataType
    status: string
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
// const SET_NEW_POST = 'SET-NEW-POST'
const SET_USER_PROFILE = 'SET-NEW-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

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
    // newPost: '',
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
    },
    status: ''
}

const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionsType): ProfileReducerType => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: String(Math.floor(Math.random() * 33433)),
                name: 'Kiril',
                img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
                description: action.newPostBody
            }
            return { ...state, posts: [...state.posts, newPost] }
        // stateCopy.posts.push(newPost)
        // stateCopy.newPost = ''
        // return stateCopy

        // case SET_NEW_POST:
        //     return { ...state, newPost: action.newPost }
        // stateCopy.newPost = action.newPost
        // return stateCopy
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_USER_STATUS:
            return {...state, status: action.status}    
        default:
            return state
    }

}


export default profileReducer

type AddPostTypeAC = {
    type: typeof ADD_POST,
    newPostBody: string
}

// type SetNewPostTypeAC = {
//     type: typeof SET_NEW_POST
//     newPost: string
// }

// type SetNewProfileTypeAC = {
//     type: typeof SET_USER_PROFILE
//     profile: ProfileDataType
// }

// type SetUserStatusAC = {
//     type: typeof SET_USER_STATUS
//     status: string
// }

export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setUserStatusAC>

export const addPostAC = (newPostBody: string): AddPostTypeAC => ({ type: ADD_POST, newPostBody } as const)

// export const setNewPostAC = (text: string): SetNewPostTypeAC => ({ type: SET_NEW_POST, newPost: text })

export const setUserProfileAC = (profile: ProfileDataType) => ({ type: SET_USER_PROFILE, profile } as const)

export const setUserStatusAC = ( status: string)  => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

export const getUsersProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.getUsersProfile(userId)
            .then(data => {
                console.log(data)
                dispatch(setUserProfileAC(data))
            })
    }
}

export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.getUserStatus(userId)
        .then(res => {
            console.log(res)
            dispatch(setUserStatusAC(res.data))
        })
    }
}


export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.updateUserStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setUserStatusAC(status))
            }
           
        })
    }
}
