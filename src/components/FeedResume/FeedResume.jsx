import React from 'react';
import  {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import style from './FeedResume.module.css';
import _ from 'lodash';
import ResumeCollapse from './ResumeCollapse';


const FeedResume = (props)=>{
    let resumes = props.resumes;

    return (
        <Col>
            <div>Resume</div>
            {
                _.isEmpty(resumes)?
                ''
                //TODO::EmptyMsg
                :
                resumes.map( (resume, index) =>{
                    return <ResumeCollapse key={resume.id} resume={resume}></ResumeCollapse>;
                } )
            }


        </Col>
    );
}
export default FeedResume;