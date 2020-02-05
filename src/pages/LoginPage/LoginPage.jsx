import React from 'react';
//import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import RegisterFrom from '../../components/RegisterForm';
import ModelUser from '../../models/user';

class LoginPage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
//            confirmPassword: ''
            activeErr: false,
            msgErr:''
        }
    }

    handleChange = (e) =>{
        let {name, value} = e.target;
        console.log(name, "",value);
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        const {username, password} = this.state;
        const { history, isLogin} = this.props;
        try{
            if(isLogin)
                ModelUser.createUser(username, password);
        }catch(e)
        {
            let {activeErr, msgErr} = this.state;
            activeErr = true;
            msgErr = e.message;
        }

            history.push('/sign-in');        
        
    }


    render = ()=> {
        const {isLogin} = this.props;
        return (
            <div className={style.loginContainer}>          
                {isLogin?(
                    <React.Fragment>
                        <h2>Login</h2>
                        <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <h2>Registration</h2>
                        <RegisterFrom handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    </React.Fragment>
                )}
    <Alert isOpen={this.state.activeErr}> {this.state.msgErr}</Alert>
            </div>
        );
    }
}
export default LoginPage;