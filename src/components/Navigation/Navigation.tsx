import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css'
import { SideBarType } from '../../App';
import SideBar from './SideBar/SideBar';
import { ActionsTypes } from '../../redux/redux-store';
import SideBarContainer from './SideBar/SideBarContainer';

type NavigationPropsType = {
    // sideBar: SideBarType[]
    // dispatch: (action: ActionsTypes) => void
}



const Navigation = (props: NavigationPropsType) => {
    
    return (
        <div className={style.navigation}>
            
            <div className={style.item}>
                <h4><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></h4>
            </div>
            <div className={style.item}>
                <h4><NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink></h4>
            </div>
            <div className={style.item}>
                <h4><NavLink to='/users' activeClassName={style.active}>Users</NavLink></h4>
            </div>
            <div className={style.item}>
                <h4><NavLink to='/settings' activeClassName={style.active}>Settings</NavLink></h4>
            </div>
            <div className={style.sideBar}>
                <SideBarContainer />
            </div>
        </div>
    );
};

export default Navigation;