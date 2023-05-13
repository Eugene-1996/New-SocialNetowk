import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { AppReduxStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerType>{


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true

        })
        .then(response => {
            console.log(response.data.data)
            if(response.data.resultCode === 0){
                // let {id, email, login, isAuth} = response.data.data
                console.log(response.data.data.isAuth)
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login) 
            }
        })
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    
    return {
        setAuthUserData: (id: number, email: string, login: string) => dispatch(setAuthUserDataAC(id, email, login))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)