import React  from 'react';
//import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import style from './FeedResumePage.module.css';
import FeedResume from '../../components/FeedResume';
import ModelResume from '../../models/resume';
import _ from 'lodash';

class FeedResumePage extends React.Component{ 
    constructor(props){
        super(props);
        let resumes = props.resumes?props.resumes:ModelResume.get({})


        this.state = {
            resumes: resumes,
        }
    }


    render = ()=> {
        const {
            resumes
        } = this.state;
        
        return (
            <FeedResume resumes={resumes}></FeedResume>
        );
    }
}
export default FeedResumePage;