import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './FeedResume.module.css';
import ModelUser from '../../models/user-front';
import { Col, Media,Label } from 'reactstrap';

const FeedResume = (props)=>{
    const {resume} = props;
    let _user = ModelUser.getUserById(resume.idUser);

    const [user] = useState(_user);



    return (
        <Col className={style.Border}>
            <div className={style.userInfo}>
                <div className={style.avatar}>
                    {user.profile.avatar?
                        <Media width={50} height={50} src={user.profile.avatar} alt='Avatar'></Media>
                        :
                        <Media width={50} height={50} src='https://image.flaticon.com/icons/svg/1077/1077114.svg' alt='Avatar'></Media>                    
                    }
                </div>
                <div className={style.userName}>
                    <span>
                        {
                            user.profile.name?
                            user.profile.name
                            :
                            'No name'
                        }
                    </span>
                </div>
            </div>
            <div className={style.userResume}>
                <div>
                    <div>
                        <Label>Job:</Label>
                        <Label>{resume.job}</Label>
                    </div>
                    <div>
                        <Label>Fullname:</Label>
                        <Label>{`${resume.firstname} ${resume.lastname}`}</Label>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Label>Employment history:</Label>
                    <Label>{resume.employments.length}</Label>
                </div>
                <div>
                <Label>Education history:</Label>
                    <Label>{resume.educations.length}</Label>
                </div>
                <div>
                <Label>Skills:</Label>
                    <Label>{resume.skills.length}</Label>
                </div>
                <div>
                <Label>Links:</Label>
                    <Label>{resume.links.length}</Label>
                </div>
                <div>
                    <Label>Language:</Label>
                    <Label>{resume.languages.length}</Label>
                </div>
            </div>
        </Col>
    );
}
export default FeedResume;