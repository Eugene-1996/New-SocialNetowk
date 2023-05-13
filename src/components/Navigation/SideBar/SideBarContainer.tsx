






import React, { ChangeEvent } from 'react';
import style from './myposts.module.css'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SideBarType } from '../../../App';
import SideBar from './SideBar';
import { AppReduxStateType } from '../../../redux/redux-store';



type MapDispatchToPropsType = {

}

type MapStateToPropsType = {
   
        sideBarData: SideBarType[]
    
}



let MapStateToProps = (state: AppReduxStateType) : MapStateToPropsType => {
    return {
       sideBarData: state.sideBarData.sideBarData
    }
}




let MapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
                
    }
}
const SideBarContainer = connect(MapStateToProps, MapDispatchToProps)(SideBar)

export default SideBarContainer;
