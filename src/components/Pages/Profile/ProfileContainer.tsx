import React, { ComponentType } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { AppReduxStateType } from '../../../redux/redux-store';
import { ProfileDataType, getUsersProfileThunkCreator, setUserProfileAC } from '../../../redux/profile-reducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { profileAPI } from '../../../api/API';



type PathParamsType = {
    userId: string 
}

type MapStateToPropsType = {
    userProfile: ProfileDataType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileDataType) => void
    getUsersProfileThunkCreator: (userId: string) => void

}

export type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
 
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<CommonPropsType> {
    

    componentDidMount()  {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }

                this.props.getUsersProfileThunkCreator(userId)
        //     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        //         .then(response => {
        //             this.props.setUserProfile(response.data)
        //         })
        }
    


    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        );
    }
   
};

let MapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {  
    return {
        userProfile: state.profileData.profile,
        isAuth: state.authData.isAuth
    }
}

// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: ProfileDataType) => dispatch(setUserProfileAC(profile))
//     }
// }

const withRouterComponent = withRouter(ProfileContainer as unknown as WithRouterComponentType)

type WithRouterComponentType = ComponentType<RouteComponentProps<any, any, unknown>>


export default connect(MapStateToProps, {
    // setUserProfile: setUserProfileAC,
    getUsersProfileThunkCreator
})(withRouterComponent)