import React from 'react';
import style from './profileinfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
            </div>
            <div>
            <h6>Eugene</h6>    
            </div>
        </div>
    );
};
export default ProfileInfo;