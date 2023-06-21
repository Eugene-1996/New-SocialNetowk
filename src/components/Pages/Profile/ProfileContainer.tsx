import React, { ComponentType, FC } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { AppReduxStateType } from '../../../redux/redux-store';
import { ProfileDataType, getUserStatusThunkCreator, getUsersProfileThunkCreator, setUserProfileAC, updateUserStatusThunkCreator } from '../../../redux/profile-reducer';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { profileAPI } from '../../../api/API';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';



type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    userProfile: ProfileDataType
    userStatus: string
    isAuthorizedUserId: number
    isAuth: boolean
}

type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileDataType) => void
    getUsersProfileThunkCreator: (userId: string) => void
    getUserStatusThunkCreator: (userId: string) => void
    updateUserStatusThunkCreator: (status: string) => void
}

export type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<CommonPropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.isAuthorizedUserId)
            if (!userId) {
                this.props.history.push('./login')
            }
        }

        this.props.getUsersProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
        // this.props.updateUserStatusThunkCreator(status)
        //     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        //         .then(response => {
        //             this.props.setUserProfile(response.data)
        //         })
    }



    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.userStatus} updateStatus={this.props.updateUserStatusThunkCreator} />
            </div>
        );
    }
};


let MapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        userProfile: state.profileData.profile,
        userStatus: state.profileData.status,
        isAuthorizedUserId: state.authData.data.id,
        isAuth: state.authData.isAuth
        // isAuth: state.authData.isAuth
    }
}

// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: ProfileDataType) => dispatch(setUserProfileAC(profile))
//     }
// }
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// const withRouterComponent = withRouter(AuthRedirectComponent as unknown as WithRouterComponentType)

// type WithRouterComponentType = ComponentType<RouteComponentProps<any, any, unknown>>


export default compose<FC>(
    connect(MapStateToProps, { getUsersProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)
