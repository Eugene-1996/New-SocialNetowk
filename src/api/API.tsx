import axios from "axios"
import { DataPropsType } from "../redux/users-reducer"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c6dbaf3a-52af-49fb-993f-71adb5fbbb02'
    }
})


export const userAPI = {

    getUsers(currentPage: number, pageSize: number): Promise<DataPropsType> {
        // debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                // console.log(response.data, 'dhssh')
                return response.data

            })
    },

    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
        // .then(response => response.data)
    },


    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
        // .then(response => response.data)
    }

}


export const profileAPI = {

    getUsersProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}


export const authAPI = {
    getAuthUser(){
        return instance.get(`auth/me`)
        .then(response => {
           return response.data
        })
    }
}



// axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
//     withCredentials: true
// })
// .then(response => {
//     if(response.data.resultCode === 0){
//         // let {id, email, login, isAuth} = response.data.data
//         this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login) 
//     }
// })







