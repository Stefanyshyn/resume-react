import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResumePage.module.css';
import { Form, FormGroup, Label, Input, Col, Media, Row } from 'reactstrap';

class CreateResumePage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.state = {
            isPersonalAddition: false,

        }
    }

    handelClickPersonalAddional = (e) =>{
        let {isPersonalAddition} = this.state;
        this.setState({isPersonalAddition: !isPersonalAddition});
    }
    render = ()=> {
        const { isPersonalAddition } = this.state;
        const { handelClickPersonalAddional } = this;

        return (
            <Form name='resumeForm'>
                <FormGroup>
                    <h1>Personal data</h1>
                     <Col sm={12}>
                        <Label>Job title</Label>
                        <Input type="text" placeholder="e.g. Teacher"></Input>
                    </Col>
                    <Col>
                        <Row className={style.avatarResume}>
                            <div className={style.avatar}>
                                <Media width='100' height='130' src='https://image.flaticon.com/icons/svg/1077/1077114.svg' alt='Picture'></Media>
                            </div>
                            <div className={style.avatarSetting}>
                                <div>
                                    <Media width="24" height="24" viewBox="0 0 24 24"  src='https://image.flaticon.com/icons/png/128/1001/1001371.png' alt=" * "/>
                                    Edit photo
                                </div>
                                <div>
                                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/748/748023.svg' alt=" - "/>
                                    <div >Delete</div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <Label>First Name</Label>
                        <Input type="text" placeholder="John"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Last Name</Label>
                        <Input type="text" placeholder="e.g. Teacher"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Email</Label>
                        <Input type="text" placeholder="example@example.com"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Phone</Label>
                        <Input type="text" placeholder="--- -- --- -- ---"></Input>
                    </Col>
                    {
                        isPersonalAddition?<PersonalAddionalDetails></PersonalAddionalDetails>:''
                    }
                    <Col className={style.personalAdditionToggel} onClick={handelClickPersonalAddional} >
                        <span>{ isPersonalAddition? 'Edit additional details':'Hide additional details'}</span>
                        {
                            isPersonalAddition?
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/2089/2089643.svg' alt=" /|\"/>
                            :
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/625/625946.svg' alt=" \|/"/>
                        }
                    </Col>                    
                </FormGroup>
            </Form>
        );
    }
}

const PersonalAddionalDetails = ()=>{
    return (
        <div>
                        <Col sm={12}>
                            <Label>Country</Label>
                            <Input type="text" placeholder="--- -- --- -- ---"></Input>
                        </Col>
                        <Col sm={12}>
                        <Label>City</Label>
                        <Input type="text" placeholder="Ternopil"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Nationality</Label>
                        <Input type="text"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Place Of Birth</Label>
                        <Input type="text"></Input>
                    </Col>
                    <Col sm={12}>
                        <Label>Date Of Birth</Label>
                        <Input type="date" ></Input>
                    </Col>
                    </div>
    );
}
export default CreateResumePage;