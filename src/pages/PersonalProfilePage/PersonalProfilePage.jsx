import React from 'react';
import { 
    CardImg, 
    CardBody,
    CardText, 
} from 'reactstrap';
import faker from 'faker';
import style from './PersonalProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.css';


class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.user = {
            profile:{
                name: faker.name.firstName(2),
                avatar: faker.image.avatar()
            }
        }
    }
    render(){
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