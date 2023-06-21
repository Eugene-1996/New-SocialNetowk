import React, { ComponentProps } from 'react';
import styles from './FormsControls.module.css'
// {input: any, meta: any, ...props}
type PropsType = {
    input: any
    meta: any
    child: any
} & ComponentProps<'textarea'>



export const FormControl = ({input, meta, child,  ...props} : PropsType) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
            {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    );
};




export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};



export const Input = (props : any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};


