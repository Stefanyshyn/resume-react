import React from 'react';
import  {Input, Form,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './RegisterForm.module.css';
const RegisterForm = (props)=>{
    const {handleSubmit, handleChange} = props;
    return (
        <Form className={style.formRegister} onSubmit={handleSubmit}>
            <Input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <Input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange}/>
            <Button type="submit">Register</Button>
        </Form>
    );
}
export default RegisterForm;