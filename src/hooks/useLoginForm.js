import { useState, useCallback } from 'react';
import ModelUser from '../models/user-front';
import TYPE_MESSAGE from '../constants/typeMessage';

export const useLoginForm = (props)=>{
    const [state, setState] = useState({
        username: '', 
        password: '',
        error:{
            active: false,
            message: ''
        }
    })

    const handleChange = useCallback((event) =>{
        let {name, value} = event.target;
        setState((s)=>({ ...s, [name]:value }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.username, state.password])

    const handleSubmit = (e)=> {
        e.preventDefault();
        const { history, isLogin} = props;
        const { username, password, confirmPassword} = props.auth;
            
        try{
            if(isLogin)
                ModelUser.login(username, password);
            else {
                if(username.trim() === '')
                    throw new Error('Username is empty')
                if(password.trim() === '')
                    throw new Error('Password is empty')
                if(confirmPassword.trim() === '')
                    throw new Error('Confirm password is empty')
                if(password !== confirmPassword) 
                    throw new Error('confirm password is wrong')                
                ModelUser.signup(username, password);
            }
            history.push('/profile');       
        }catch(e)
        {
            props.showMessage(e.message, TYPE_MESSAGE.DANGER)
        }        
        
    }

    return {
        state,
        handleChange,
        handleSubmit,
    }    
}
