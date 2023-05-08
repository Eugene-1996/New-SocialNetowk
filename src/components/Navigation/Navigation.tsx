import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css'
import { SideBarType } from '../../App';
import SideBar from './SideBar/SideBar';

type NavigationPropsType = {
    sideBar: SideBarType[]
}


const Navigation = (props: NavigationPropsType) => {

    const sideBarElements = props.sideBar.map(s => <SideBar key={s.id} id={s.id} name={s.name} img={s.img} />)

    return (
        <div className={style.navigation}>
            
            <div className={style.item}>
                <h4><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></h4>
            </div>
            <div className={style.item}>
                <h4><NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink></h4>
            </div>
            <div className={style.item}>
                <h4><NavLink to='/settings' activeClassName={style.active}>Settings</NavLink></h4>
            </div>
            <div className={style.sideBar}>
                {sideBarElements}
            </div>
        </div>
    );
};

export default Navigation;