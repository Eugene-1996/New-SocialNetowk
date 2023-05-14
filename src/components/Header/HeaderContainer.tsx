import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { AuthUserThunk, setAuthUserDataAC } from "../../redux/auth-reducer";
import { AppReduxStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { authAPI } from "../../api/API";


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    // setAuthUserData: (id: number, email: string, login: string) => void
    AuthUserThunk: () => void
}

type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerType>{


    componentDidMount() {


        this.props.AuthUserThunk()
        // authAPI.getAuthUser()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             this.props.setAuthUserData(data.data.id, data.data.email, data.data.login)
        //         }
        //     })


        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        //     withCredentials: true
        // })
        // .then(response => {
        //     if(response.data.resultCode === 0){
        //         // let {id, email, login, isAuth} = response.data.data
        //     }
        // })
    }

    render() {
        return (

            <div>

                <Header {...this.props} />
            </div>
        )
    }

}



const mapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        // authData: state.authData.data
        isAuth: state.authData.isAuth,
        login: state.authData.data.login
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

//     return {
//         setAuthUserData: (id: number, email: string, login: string) => dispatch(setAuthUserDataAC(id, email, login))
//     }
// }


export default connect(mapStateToProps, {
    // setAuthUserData: setAuthUserDataAC,
    AuthUserThunk
})(HeaderContainer)

