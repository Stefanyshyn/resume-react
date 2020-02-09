import React from 'react';
//import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm';
import RegisterFrom from '../../components/RegisterForm';
import ModelUser from '../../models/user-front';

class LoginPage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            error:{
                active: false,
                message: ''
            }
        }
    }

    handleChange = (e) =>{
        let {name, value} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        const {username, password, confirmPassword } = this.state;
        const { history, isLogin} = this.props;
        try{
            if(isLogin)
                ModelUser.login(username, password);
            else {
                if(password !== confirmPassword) 
                    throw new Error('confirm password is wrong')                
                ModelUser.signup(username, password);
            }
            history.push('/profile');        
        }catch(e)
        {
            this.setState({error:{
                active: true,
                message: e.message
            }})
        }        
    }


    render = ()=> {
        const {isLogin} = this.props;
        const {error} = this.state;
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
                <Alert isOpen={error.active}> {error.message}</Alert>
            </div>
        );
    }
}
export default LoginPage;