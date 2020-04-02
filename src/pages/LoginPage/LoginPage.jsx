import React from 'react';
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import RegisterFrom from '../../components/RegisterForm';
import {useLoginForm} from '../../hooks/useLoginForm';

const LoginPage = (props) => { 
    const {
        state,
        handleChange,
        handleSubmit    
    } = useLoginForm(props);
    const {isLogin} = props;
    const {error} = state;
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
                    <RegisterFrom handleSubmit={handleSubmit} handleChange={handleChange}/>
                </React.Fragment>
            )}
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
            <Alert isOpen={error.active}> {error.message}</Alert>
        </div>
    );
}
export default LoginPage;