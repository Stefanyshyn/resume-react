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
                     <Col className={style.JobAvatar}>
                        <div className={style.JobResume}>
                            <Label>Job title</Label>
                            <Input type="text" placeholder="e.g. Teacher"></Input>
                        </div>
                        <div className={style.AvatarResume}>
                            <div className={style.avatar}>
                                <Media width='100' height='100' src='https://image.flaticon.com/icons/svg/1077/1077114.svg' alt='Picture'></Media>
                            </div>
                            <div className={style.avatarSetting}>
                                <div>
                                    <Media width="24" height="24" viewBox="0 0 24 24"  src='https://image.flaticon.com/icons/png/128/1001/1001371.png' alt=" * "/>
                                    <span>Edit photo</span>
                                </div>
                                <div>
                                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/748/748023.svg' alt=" - "/>
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className={style.nameResume}>
                        <div className={style.Firstname}>
                            <Label>First Name</Label>
                            <Input type="text" placeholder="John"></Input>
                        </div>
                        <div className={style.Lastname}>
                            <Label>Last Name</Label>
                            <Input type="text" placeholder="e.g. Teacher"></Input>
                        </div>
                    </Col>
                    <Col className={style.ContactInfoResume}>
                        <div className={style.EmailResume}>
                            <Label>Email</Label>
                            <Input type="text" placeholder="example@example.com"></Input>
                        </div>
                        <div className={style.NumberResume}>
                            <Label>Phone</Label>
                            <Input type="text" placeholder="--- -- --- -- ---"></Input>
                        </div>
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
                <FormGroup>
                    <h2>Professional Summary</h2>
                    <Col>
                        <span>
                            Include several sentences about your total experience
                        </span>
                        <Input rows={4} type="textarea" style={{resize: 'none'}}></Input>
                    </Col>
                </FormGroup>                
                <FormGroup>
                    <h2>Employment History</h2>
                    <Col>
                        <span>
                            Include your relevant experience and dates in this section. List your most recent position first.
                        </span>
                    </Col>
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add employment</span>
                    </Col>
                    <Col>
                        <div>
                            <span>Job Title</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Employer</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Star and End Date</span>
                            <div className={style.EmpoymentDate}>
                                    <Input type="date"></Input>    
                                    <Col></Col>
                                    <Input type="date"></Input>    
                            </div>
                        </div>
                        <div>
                            <span>City</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Description</span>
                            <Input rows={4} type="textarea" style={{resize: 'none'}}></Input>
                        </div>
                    </Col>
                </FormGroup>  
                <FormGroup>
                    <h1>Education</h1>
                    <Col>
                        <span>
                            Include your most recent educational achievements and the dates
                        </span>
                    </Col>
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add education</span>
                    </Col>
                    <Col>
                        <div>
                            <span>Establishment</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Degree</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Star and End Date</span>
                            <div className={style.EmpoymentDate}>
                                <Input type="date"></Input>    
                                <Col></Col>
                                <Input type="date"></Input>    
                            </div>
                        </div>
                        <div>
                            <span>City</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Description</span>
                            <Input rows={4} type="textarea" style={{resize: 'none'}}></Input>
                        </div>
                    </Col>
                </FormGroup>    
                <FormGroup>
                    <h1>Links</h1>
                    <Col>
                        <span>
                            Perhaps It will be  a link to your portfolio or personal website
                        </span>
                    </Col>
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add link</span>
                    </Col>
                    <Col>
                        <div>
                            <span>Title</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>URL-path</span>
                            <Input type="text"></Input>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <h1>Skills</h1>
                    <Col>
                        <span>

                        </span>
                    </Col>
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add skill</span>
                    </Col>
                    <Col>
                        <div>
                            <span>Skill</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Degree</span>
                            <Input type="text"></Input>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <h1>Languages</h1>
                    <Col>
                        <span>

                        </span>
                    </Col>
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add Language</span>
                    </Col>
                    <Col>
                        <div>
                            <span>Language</span>
                            <Input type="text"></Input>
                        </div>
                        <div>
                            <span>Level</span>
                            <Input type="text"></Input>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <h1>Hobbies</h1>
                    <Col>
                        <span>
                            What do you like do?
                        </span>
                        <Input rows={4} type="textarea" style={{resize: 'none'}}></Input>
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