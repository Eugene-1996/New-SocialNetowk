import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength30, maxLengthCreator, required } from '../../../../utils/validators/validators';
import {Textarea} from '../../../../common/FormsControls /FormsControls';

export type FormDataType = {
    newPostBody: string
  }
  

  const maxLength10 =  maxLengthCreator(10)

  const MyPostsForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <div>
          <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea} 
            name={'newPostBody'}
            placeholder={'write smth'} 
            validate={[required, maxLength10]}
            />
          </div>
          <div>
          <button>Add post</button>
          </div>
          </form>
        </div>
      )
  }
  
  export const MyPostsReduxForm = reduxForm<FormDataType>({
    form: 'addNewPost'
  })(MyPostsForm)

export default MyPostsReduxForm;