import React from 'react';
import  {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './FeedResume.module.css';
import _ from 'lodash';
import ResumeCollapse from './ResumeCollapse';


const FeedResume = (props)=>{
    let resumes = props.resumes;

    return (
        <Col>
            {
                _.isEmpty(resumes)?
                ''
                //TODO::EmptyMsg
                :
                resumes.map( (resume, index) =>{
                    return (
                        <div className={style.containerResume} key={resume.id}>
                            <ResumeCollapse key={resume.id} resume={resume}></ResumeCollapse>
                        </div>
                    );
                } )
            }


        </Col>
    );
}
export default FeedResume;