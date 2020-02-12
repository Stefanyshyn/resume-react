import React from 'react';
import { 
    Input, 
    Col, Form, FormGroup, Label, Media
} from 'reactstrap';
import style from './PersonalProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserModel from '../../models/user-front';
import Uploader from '../../utils/uploader';

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.user = UserModel.getCurrentUser();
        this.state = {
            avatar: this.user.profile.avatar,
            newAvatar: null,
            username: this.user.username,
            name: this.user.profile.name,
        }
    }

    handleSubmit = async (e)=>{
        e.preventDefault();

        let file = e.target.newAvatar.files[0];
        let urlImage = await Uploader.upload(file);
        const {username, name} = this.state;
        let user = {
            id: this.user.id,
            usernane: username,
            profile: {
                name,
                avatar: urlImage
            }
        }
        console.log(1);
        UserModel.update(user);
        console.log(2);
    }

    handleSelectFile = async (e)=>{
        const file = e.target.files[0];
        this.setState({
            avatar: URL.createObjectURL(file) 
        })
    }

    handleChange = (e)=>{
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        const {avatar, name} = this.state;
        return(
            <Form name="profile" className={style.profileContainer} onSubmit={this.handleSubmit}>
                <FormGroup className={style.profileAvatar}>                    
                    <Col>
                        <Media className={style.avatar} src={avatar} alt="Here should be the user face" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="name" sm={3}>
                       Name
                    </Label>
                    <Col sm={9}>
                        <Input  className={style.Input} type="text" name="name" value={name}  onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>
                        Avatar
                    </Label>
                    <Col sm={9}>
                        <Input className={style.Input} type="file" id="global-files-button" accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.xcf,.webp,.mp4,.mov" name="newAvatar" onChange={this.handleSelectFile} />
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