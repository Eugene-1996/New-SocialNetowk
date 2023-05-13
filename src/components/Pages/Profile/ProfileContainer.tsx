import React, { ComponentType } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { AppReduxStateType } from '../../../redux/redux-store';
import { ProfileDataType, setUserProfileAC } from '../../../redux/profile-reducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';



type PathParamsType = {
    userId: string 
}

type MapStateToPropsType = {
    userProfile: ProfileDataType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDataType) => void
}

export type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
 
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<CommonPropsType> {
    

    componentDidMount()  {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
        }
    


    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        );
    }
   
};

let MapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {  
    return {
        userProfile: state.profileData.profile
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: ProfileDataType) => dispatch(setUserProfileAC(profile))
    }
}

const withRouterComponent = withRouter(ProfileContainer as unknown as WithRouterComponentType)

type WithRouterComponentType = ComponentType<RouteComponentProps<any, any, unknown>>


export default connect(MapStateToProps, MapDispatchToProps)(withRouterComponent)