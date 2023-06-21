import React from 'react';
import style from './sideBar.module.css'
import { SideBarType, StateType } from '../../../App';
import { SideBarReducerType } from '../../../redux/sidebar-reducer';

export type SideBarPropsType = {
    sideBarData: SideBarType[]
    
}


const SideBar = (props: SideBarPropsType) => {

    const sideBarElements = props.sideBarData.map(s => {
        return (
            <div key={s.id} className={style.sideBar}>
            <img src={s.img} alt='error' />
            <h4>{s.name}</h4>
        </div>
        )
        })
                return (
                   <div>
                    {sideBarElements}
                   </div>   
                )

};

export default SideBar;