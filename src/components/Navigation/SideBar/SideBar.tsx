import React from 'react';
import style from './sideBar.module.css'

export type SideBarPropsType = {
    id: string
    name: string
    img: string
}

const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={style.sideBar}>
            <img src={props.img} alt='error'/>
            <h4>{props.name}</h4>
        </div>
    );
};

export default SideBar;