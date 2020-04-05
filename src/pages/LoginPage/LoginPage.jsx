import React from 'react';
import {Alert} from 'reactstrap'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import Registration from '../../components/RegisterForm';

import {useLoginForm} from '../../hooks/useLoginForm';

const LoginPage = (props) => { 
    const {
        handleSubmit,
        handleChange    
    } = useLoginForm(props);

    const {
        active,
        message,
        typeAlert
    } = props.auth.alterMessege;
    const {isLogin} = props;

    const {
        closeMessage,
    }=props;
    
    return (
        <div className={style.loginContainer}>
            {isLogin?(
                <React.Fragment>
                    <h2>Login</h2>
                    <LoginForm handleSubmit={handleSubmit} handleChange={handleChange}/>
                </React.Fragment>
            ):(
                <React.Fragment>
                    <h2>Registration</h2>
                    <Registration handleSubmit={handleSubmit}  {...props} />
                </React.Fragment>
            )}
            <Alert color={typeAlert} isOpen={active} toggle={closeMessage} fade={false}>
                {message}
            </Alert>
            <div>
                {
                isLogin ? (
                    <div>
                        Don&apos;t have an account? <Link to={'sign-up'}>Sign up</Link>
                    <br />
                    </div>
                ) : (
                    <div>
                        Already have an account? <Link to={'sign-in'}>Login</Link>
                    </div>
                )
                }
            </div>
        </div>
    );
}
export default LoginPage;