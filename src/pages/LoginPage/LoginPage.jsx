import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import AuthLayout from '../../layouts/AuthLayout'; 
const LoginPage = (props)=>{
    const {isLogin} = props;
    return (
        <AuthLayout>  
            <div className={style.loginContainer}>          
                <h2>{isLogin?"Login":"Registration"}</h2>
                <LoginForm/>
            </div>
        </AuthLayout>
    );
}
export default LoginPage;