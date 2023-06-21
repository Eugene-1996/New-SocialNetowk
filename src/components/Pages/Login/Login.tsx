import React from 'react';
import LoginReduxForm, { FormDataType } from './LoginReduxForm';
import { AppThunkType } from '../../../redux/redux-store';
import { Redirect } from 'react-router-dom';
import LoginContainer from './LoginContainer';

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const AddLoginForm = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    
    if(props.isAuth){
       return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={AddLoginForm}/>
        </div>
    );
};
export default Login;