import React from 'react';
import style from './profileinfo.module.css'
import { ProfileDataType } from '../../../../redux/profile-reducer';
import ProfileStatus from '../../../ProfileStatus/ProfileStatus';

type ProfileInfoType = {
    userProfile: ProfileDataType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.userProfile.photos.large} alt=''/>
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
            <h6>{props.userProfile.fullName}</h6>    
            </div>
        </div>
    );
};
export default ProfileInfo;