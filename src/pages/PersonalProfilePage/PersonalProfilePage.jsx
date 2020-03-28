import React from 'react';
import { 
    Input, 
    Col, Form, FormGroup, Label, Media, Spinner
} from 'reactstrap';
import style from './PersonalProfilePage.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import useUserProfile from '../../hooks/usePersonalProfile';

const ProfilePage = ({user, ...props}) => {
    const {state,
        handleSubmit,
        handleChange,
        handleSelectFile,} = useUserProfile({user, ...props})
    const {
        avatar,name,
        isSaveResume
    } = state;

    return(
        <Form  name="profile" className={style.profileContainer} 
            onSubmit={handleSubmit}>
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
                    <Input  className={style.Input} type="text" name="name" 
                        value={name}  onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3}>
                    Avatar
                </Label>
                <Col sm={9}>
                    <Input className={style.Input} type="file" 
                    id="global-files-button" 
                    accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.xcf,.webp,.mp4,.mov" name="newAvatar" 
                    onChange={handleSelectFile} 
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col className={style.btnSave + " " + style.Input}>
                    <Input className="btn btn-dark" value="Save" name="save" type="submit"/>
                    {isSaveResume?
                            <Spinner width='44px' color='gray' ></Spinner>
                            :''}
                </Col>
            </FormGroup>
        </Form>
    );
}

export default ProfilePage;