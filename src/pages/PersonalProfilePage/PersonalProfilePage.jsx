import React from 'react';
import { 
    Input, 
    Col, Form, FormGroup, Label, Media
} from 'reactstrap';
import style from './PersonalProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserModel from '../../models/user-front';

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : UserModel.getCurrentUser()
        }
    }

    handleSubmit = ()=>{

    }

    handleSelectFile = (e)=>{
        const {value} = e.target;
        this.setState({user:{
            profile:{
                avatar: value
        }}})
        console.log(this.state, value);
    }

    render(){
        const {profile} = this.state.user;
        return(
            <Form className={style.profileContainer} onSubmit={this.handleSubmit}>
                <FormGroup className={style.profileAvatar}>                    
                    <Col>
                        <Media className={style.avatar} src={profile.avatar} alt="Here should be the user face" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="name" sm={3}>
                       Name
                    </Label>
                    <Col sm={9}>
                        <Input  className={style.Input} type="text" name="name" readOnly value={profile.name} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>
                        Avatar
                    </Label>
                    <Col sm={9}>
                        <Input className={style.Input} type="file" name="newAvatar" onChange={this.handleSelectFile} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className={style.btnSave + " " + style.Input}>
                    <Input className="btn btn-dark" value="Save" name="save" type="submit"/>
                </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ProfilePage;