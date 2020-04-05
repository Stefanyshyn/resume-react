import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './RegisterForm.module.css';
const RegisterForm = (props)=>{

    const { 
        changeUsername,
        changePassword,
        changeConfirmPassword,
        handleSubmit
    } = props;
    
    return (
        <Form className={style.formRegister} onSubmit={handleSubmit}>
            <Input 
                className={style.Input} 
                type="text" 
                name="username" 
                placeholder="Username" 
                onChange={event => changeUsername(event.target.value)}/>
            <Input 
                className={style.Input} 
                type="password"
                name="password" 
                placeholder="Password" 
                onChange={event => changePassword(event.target.value)}/>
            <Input 
                className={style.Input} 
                type="password"
                name="confirmPassword" 
                placeholder="Confirm password" 
                onChange={event => changeConfirmPassword(event.target.value)}/>
            <Button className={style.Button}type="submit">Register</Button>
        </Form>
    );
}
export default RegisterForm;