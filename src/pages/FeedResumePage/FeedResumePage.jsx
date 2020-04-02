import React, { useState, useEffect }  from 'react';
import FeedResume from '../../components/FeedResume';
import ModelResume from '../../models/resume';
import ModelUser from '../../models/user-front';

function useUserProfile({history}){    
    const currentUser = ModelUser.getCurrentUser();
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
const FeedResumePage = ({history})=>{ 
    const {
        state,
        currentUser,
        handleClickOnResume
    } = useUserProfile({history});
    const { resumes } = state;

    return (
        <FeedResume 
        resumes={resumes} 
        currentUser={currentUser} 
        handleClickOnResume={handleClickOnResume}
        >            
        </FeedResume>
    );
}
export default FeedResumePage;