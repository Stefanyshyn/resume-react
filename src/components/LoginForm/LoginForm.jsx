import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './LoginForm.module.css';
const LoginForm = (props)=>{
    const {handleSubmit, handleChange} = props;
    return (
        <Form className={style.formLogin} onSubmit={handleSubmit}>
            <Input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <Button type="submit">Log In</Button>
        </Form>
    );
}
export default LoginForm;