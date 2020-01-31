import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginPage.module.css';
const LoginPage = (props)=>{
    return (
        <Form className={style.formLogin}>
            <Input type="text" name="username" placeholder="1"/>
            <Input type="password" name="password"/>
            <Button type="submit">Log In</Button>
        </Form>
    );
}
export default LoginPage;