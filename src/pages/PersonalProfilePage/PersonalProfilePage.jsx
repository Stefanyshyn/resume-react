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
        this.user = UserModel.getCurrentUser();
        this.state = {
            avatar: this.user.profile.avatar,
            newAvatar: null,
            username: this.user.username,
            name: this.user.profile.name,
        }
    }

    upload = async (file)=>{
        let Imgur = {
            url: 'https://api.imgur.com/3/image',
            clientId: 'ad0fc8894c9331f'
        }
        let formData = new FormData( document.forms.profile );
   
        formData.append('image',file);
        
        let result = await fetch(Imgur.url, {
            headers:{
                Authorization: `Client-ID ${Imgur.clientId}`
            },
            method: 'POST',
            body: formData
        })
        const json = await result.json();
        console.log(json);
        return console.log(json.data.link);
    }

    handleSubmit = async (e)=>{
        let file = e.target.newAvatar.files[0];
        let urlImage = await this.upload(file);
        const [username, newAvatar, name] = this.state;
        let user = {
            id: this.user.id,
            usernane: username,
            profile: {
                name: name,
                avatar: newAvatar
            }
        }

        UserMode.upda
        
    }

    handleSelectFile = async (e)=>{
        const file = e.target.files[0];
        this.setState({
            avatar: URL.createObjectURL(file) 
        })
        
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
                        <Input  className={style.Input} type="text" name="name" readOnly value={name} />
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