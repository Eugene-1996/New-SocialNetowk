import React from 'react';
import style from './header.module.css'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.leftside}>
                    <h4>SocialNetwork</h4>
                </div>
                {/* <div className={style.rightside}>
                </div> */}
            </div>
        </div>
    );
};

export default Header;





{/* <BrowserRouter>
<div className="app-wraper">
  <HeaderContainer />
  <Navigation />
  <div className='app-wrapper-content'>
    <Route path='/profile/:userId?' render={() => <ProfileContainer  />} />
    <Route path='/dialogs' render={() => <DialogsContainer  />} />
    <Route path='/users' render={() => <UsersContainer/>}/>
    <Route path='/news' component={News} />
    <Route path='/music' component={Music} />
    <Route path='/settings' component={Settings} />
    <Route path='/friends' component={Friends} />
    <Route path='/login' component={Login} />
  </div>
</div>
</BrowserRouter> */}