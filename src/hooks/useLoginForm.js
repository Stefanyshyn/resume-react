import { useState, useCallback } from 'react';
import ModelUser from '../models/user-front';

export const useLoginForm = (props)=>{
    const [state, setState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
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
        console.log('re-render');
        const {username, password, confirmPassword } = state;
        const { history, isLogin} = props;
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
            setState((s)=>({...s, 
                error:{
                    active: true,
                    message: e.message
                }
            }))
        }        
    }

    return {
        state,
        handleChange,
        handleSubmit,
    }    
}
