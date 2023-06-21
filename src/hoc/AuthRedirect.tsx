import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppReduxStateType } from '../redux/redux-store';




type WithAuthRedirectType = {
    isAuth: boolean 
}

let mapStateToPropsToRedirect = (state: AppReduxStateType) => {
    return {
        isAuth: state.authData.isAuth
    }
}


export function withAuthRedirect<T={}>(Component: any)  {
   class RedirectComponent extends React.Component<WithAuthRedirectType>{
    render() {

                    let {isAuth, ...restProps} = this.props


        if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T & {children?: React.ReactNode}}/>
    } 
   }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)


   return ConnectedAuthRedirectComponent
};




// export function withAuthRedirect<T={}>(Component: ComponentType<T>)  {
//     class RedirectComponent extends React.Component<MapStatePropsType> {
//         render() {

//             let {isAuth, ...restProps} = this.props

//             if (!isAuth) return <Redirect to={'/login'} />

//             // const props = restProps as unknown as T & {children: React.ReactNode}
//             return <Component {...restProps as T & {children?: React.ReactNode}} />

//         }
//     }