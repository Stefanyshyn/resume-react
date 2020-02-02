import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './RegisterForm.module.css';
const RegisterForm = (props)=>{
    return (
        <Form className={style.formRegister}>
            <Input type="text" name="username" placeholder="Username"/>
            <Input type="password" name="password" placeholder="Password"/>
            <Input type="password" name="password" placeholder="Confirm password"/>
            <Button type="submit">Register</Button>
        </Form>
    );
}
export default RegisterForm;