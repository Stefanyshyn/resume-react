import React  from 'react';
import FeedResume from '../../components/FeedResume';
import ModelResume from '../../models/resume';
import ModelUser from '../../models/user-front';

class FeedResumePage extends React.Component{ 
    constructor(props){
        super(props);
        let resumes = props.resumes?props.resumes:ModelResume.get({})

        this.state = {
            resumes: resumes,
        }
    }

    handleClickOnResume = (resume)=>{
        let {history} = this.props;

        history.push(`/create-resume/${resume.id}`)
    }

    render = ()=> {
        const {
            resumes
        } = this.state;
        const {
            handleClickOnResume
        } = this;
        return (
            <FeedResume resumes={resumes} currentUser={ModelUser.getCurrentUser()} handleClickOnResume={handleClickOnResume}></FeedResume>
        );
    }
}
export default FeedResumePage;