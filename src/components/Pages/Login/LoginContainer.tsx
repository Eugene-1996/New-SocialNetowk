import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../../redux/auth-reducer';
import { AppReduxStateType } from '../../../redux/redux-store';


export const mapStateToProps = (state: AppReduxStateType) => ({
    isAuth: state.authData.isAuth
})


export default connect(mapStateToProps, {
    login
})(Login);