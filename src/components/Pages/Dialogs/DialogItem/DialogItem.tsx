import React from 'react';
import style from './dialogItem.module.css'
import { NavLink } from 'react-router-dom';
import { DialogsType } from '../../../../App';


type DialogItemType = {
    dialogs : DialogsType[]
  }


const DialogItem = (props:DialogItemType) => {
    
    return (
        <div>
              <div className={style.allDialogs}>
                {props.dialogs.map(u => {
                    return (
                        
                        <div key={u.id} className={style.dialog}>
                        <NavLink to={`/dialogs/${u.id}`}><h5>{u.name}</h5></NavLink>
                        </div>
                    )
                })}     
            </div>
        </div>
    );
};

export default DialogItem;