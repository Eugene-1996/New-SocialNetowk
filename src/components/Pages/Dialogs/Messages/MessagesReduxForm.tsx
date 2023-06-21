import React, { ComponentType } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {Textarea} from '../../../../common/FormsControls /FormsControls';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';


export type FormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                validate={[required, maxLength100]}
                name={'newMessageBody'} 
                placeholder={'Write your message'}/>
            </div>
            <div>
            <button >Add Message</button>
            </div>
        </form>
    </div>
    )
}

export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogs'
})(AddMessageForm)

