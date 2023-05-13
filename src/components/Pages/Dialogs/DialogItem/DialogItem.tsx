import React from 'react';
import style from './dialogItem.module.css'
import { NavLink } from 'react-router-dom';
import { RootStoreType } from '../../../../redux/redux-store';
import { DialogsType, MessagesType } from '../../../../App';


type DialogItemType = {

        dialogs: DialogsType[]

}


const DialogItem = (props:DialogItemType) => {
    
    // let state = props.dialogsData.dialogs
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