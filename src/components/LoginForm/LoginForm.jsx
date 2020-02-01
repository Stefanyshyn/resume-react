import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginForm.module.css';
const LoginPage = (props)=>{
    return (
        <Form className={style.formLogin}>
            <Input type="text" name="username" placeholder="Username"/>
            <Input type="password" name="password" placeholder="Password"/>
            <Button type="submit">Log In</Button>
        </Form>
    );
}
export default LoginPage;