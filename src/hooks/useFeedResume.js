import { useState, useEffect, useMemo }  from 'react';
import ModelResume from '../models/resume';
import ModelUser from '../models/user-front';

export const useFeedReseme = ({history})=>{    
    const currentUser = useMemo(()=>ModelUser.getCurrentUser(),[]);
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        resumes: [],

    })
    const handleClickOnResume = (resume)=>{
        history.push(`/create-resume/${resume.id}`)
    }
    useEffect(()=>{
        setState(s=>({ ...s, resumes:[ ...(ModelResume.get({})) ] }))
    }, [])
    
    return {
        state,
        currentUser,
        handleClickOnResume
    }
}
