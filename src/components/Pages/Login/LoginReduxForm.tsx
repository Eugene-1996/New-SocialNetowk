import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../../../common/FormsControls /FormsControls';
import { required } from '../../../utils/validators/validators';
import style from '../../../common/FormsControls /FormsControls.module.css'


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
// React.FC<InjectedFormProps<FormDataType>>

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Login'}
                            validate={[required]}
                            name={'login'}
                            component={Input} />
                    </div>
                    <div>
                        <Field placeholder={'Password'}
                            type={'password'}
                            validate={[required]}
                            name={'password'}
                            component={Input} />
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me
                    </div>
                    {props.error &&
                        <div className={style.formSummaryError}>
                            {props.error}
                        </div>}
                    <div>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm