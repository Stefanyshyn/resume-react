import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm';
const LoginPage = (props)=>{
    const {isLogin} = props;
    return (
        <div>
            <h2>{isLogin?"Login":"Registration"}</h2>
            <LoginForm/>
        </div>
    );
}
export default LoginPage;