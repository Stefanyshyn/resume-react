import React from 'react';
//import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import RegisterFrom from '../../components/RegisterForm';

const LoginPage = (props)=>{
    
    const {isLogin} = props;
    return (
        <div className={style.loginContainer}>          
            {isLogin?(
                <React.Fragment>
                    <h2>Login</h2>
                    <LoginForm/>
                </React.Fragment>
            ):(
                <React.Fragment>
                    <h2>Registration</h2>
                    <RegisterFrom/>
                </React.Fragment>
            )}
        </div>
    );
}
export default LoginPage;