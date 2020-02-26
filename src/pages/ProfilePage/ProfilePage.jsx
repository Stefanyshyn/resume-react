import React from 'react';
import { 
    CardImg, 
    CardBody,
    CardText, 
} from 'reactstrap';
import style from './ProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import ModelUser from '../../models/user-front';
import init from '../../models/initialization';

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        let _user = ModelUser.getUserByUsername()
        this.user = init.user(_user);
    }

    render = ()=>{
        const {profile} = this.user;
        return(
            <div className={style.profileContainer}>
                <div className={style.profileAvatar}>
                    <CardImg className={style.avatar} src={profile.avatar} alt="Here should be the user face" />
                </div>
                <div>
                    <CardBody className="text-center">
                        <CardText>{profile.name}</CardText>
                    </CardBody>
                </div>
        </div>
        );
    }
}

export default ProfilePage;