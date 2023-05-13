import React from 'react';
import style from './profileinfo.module.css'
import { ProfileDataType } from '../../../../redux/profile-reducer';

type ProfileInfoType = {
    userProfile: ProfileDataType
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.userProfile.photos.large} alt=''/>
            </div>
            <div>
            <h6>{props.userProfile.fullName}</h6>    
            </div>
        </div>
    );
};
export default ProfileInfo;