import React from 'react';
//import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import style from './FeedResumePage.module.css';
import LoginForm from '../../components/LoginForm';
import RegisterFrom from '../../components/RegisterForm';
import ModelUser from '../../models/user-front';

class FeedResumePage extends React.Component{ 

    render = ()=> {
  
        
        return (
            <div>Resumes</div>
        );
    }
}
export default FeedResumePage;