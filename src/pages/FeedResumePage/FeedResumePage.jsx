import React from 'react';
import FeedResume from '../../components/FeedResume';
import {useFeedReseme} from '../../hooks/useFeedResume';

const FeedResumePage = ({history})=>{ 
    const {
        state,
        currentUser,
        handleClickOnResume
    } = useFeedReseme({history});
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