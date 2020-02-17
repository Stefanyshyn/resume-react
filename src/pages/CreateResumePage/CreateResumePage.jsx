import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResumePage.module.css';
import { Form, FormGroup, Label, Input, Col, Media, Row } from 'reactstrap';

class CreateResumePage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.state = {
            isPersonalAddition: false,
            isAddEmployment: false,
            isAddEducation: false,
            isAddLink: false,
            isAddSkill: false,
            isAddLanguage: false,

            employments:[ ] 
            // employer
            // {
            //     job:'',
            //     employer: '',
            //     startDate:'',
            //     endDate:'',
            //     city: '',
            //     description: ''
            // }
            ,
        }
    }

    handleClickPersonalAddional = (e) =>{
        let {isPersonalAddition} = this.state;
        this.setState({isPersonalAddition: !isPersonalAddition});
    }

    handleClickAddEmployment = (e) =>{
        let {isAddEmployment} = this.state;
        this.setState({isAddEmployment: !isAddEmployment});    
    }
    handleClickAddEducation = (e) =>{
        let {isAddEducation} = this.state;
        this.setState({isAddEducation: !isAddEducation});
    }
    handleClickAddLink = (e) =>{
        let {isAddLink} = this.state;
        this.setState({isAddLink: !isAddLink});
    }
    handleClickAddSkill = (e) =>{
        let {isAddSkill} = this.state;
        this.setState({isAddSkill: !isAddSkill});
    }
    handleClickAddLanguage = (e) =>{
        let {isAddLanguage} = this.state;
        this.setState({isAddLanguage: !isAddLanguage});
    }

    render = ()=> {
        const { 
            isAddEducation,isPersonalAddition,
            isAddEmployment, isAddLink, 
            isAddSkill, isAddLanguage 
        } = this.state;
        const { 
            handleClickPersonalAddional,handleClickAddEmployment,
            handleClickAddEducation, handleClickAddLink, 
            handleClickAddSkill, handleClickAddLanguage
        } = this;

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
                    <Col className={style.personalAdditionToggel} onClick={handleClickPersonalAddional} >
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
                    <Col className={style.TitleArticle}>
                        <span >
                            Include several sentences about your total experience
                        </span>
                    </Col>
                    <Col>
                        <Input rows={4} type="textarea" style={{resize: 'none'}}></Input>
                    </Col>
                </FormGroup>       
                <FormGroup>
                    <h2>Employment History</h2>
                    <Col className={style.TitleArticle}>
                        <span>
                            Include your relevant experience and dates in this section. List your most recent position first.
                        </span>
                    </Col>
                    {!isAddEmployment?
                        <Col className={style.add} onClick={handleClickAddEmployment}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add employment</span>
                        </Col>
                        :
                        <React.Fragment>
                            <AddEmployment/>
                            <Col className={style.add} onClick={handleClickAddEmployment}>
                                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                                <span>Save employment</span>
                            </Col>
                        </React.Fragment>
                    }
                </FormGroup>                
                <FormGroup>
                    <h1>Education</h1>
                    <Col className={style.TitleArticle}>
                        <span>
                            Include your most recent educational achievements and the dates
                        </span>
                    </Col>
                    {!isAddEducation?

                        <Col className={style.add} onClick={handleClickAddEducation   }>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add education</span>
                        </Col>
                        :
                        <React.Fragment>
                            <AddEducation/>
                            <Col className={style.add} onClick={handleClickAddEducation   }>
                                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                                <span>Save education</span>
                            </Col>
                        </React.Fragment>
                    }
                </FormGroup>               
                <FormGroup>
                    <h1>Links</h1>
                    <Col className={style.TitleArticle}>
                        <span>
                            Perhaps It will be  a link to your portfolio or personal website
                        </span>
                    </Col>

                    {!isAddLink?
                        <Col className={style.add} onClick={handleClickAddLink}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add link</span>
                        </Col>
                        :
                        <React.Fragment>
                            <AddLink/>
                            <Col className={style.add} onClick={handleClickAddLink}>
                                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                                <span>Save link</span>
                            </Col>
                        </React.Fragment>
                    }
                </FormGroup>
                <FormGroup>
                    <h1>Skills</h1>
                    {!isAddSkill?
                        <Col className={style.add} onClick={handleClickAddSkill}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add skill</span>
                        </Col>
                        :
                        <React.Fragment>
                            <AddSkill/>
                            <Col className={style.add} onClick={handleClickAddSkill}>
                                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                                <span>Save skill</span>
                            </Col>
                        </React.Fragment>
                    }
                </FormGroup>
                <FormGroup>
                    <h1>Languages</h1>
        
                    {!isAddLanguage?
                        <Col className={style.add} onClick={handleClickAddLanguage}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add language</span>
                        </Col>
                        :
                        <React.Fragment>
                            <AddLanguage/>
                            <Col className={style.add} onClick={handleClickAddLanguage}>
                                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                                <span>Save language</span>
                            </Col>
                        </React.Fragment>
                    }
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
            <Col className={style.AddessResume}>
                <div className={style.CountryResume}>
                    <Label>Country</Label>
                    <Input type="text" placeholder="--- -- --- -- ---"></Input>
                </div>
                <div className={style.CityResume}>
                    <Label>City</Label>
                    <Input type="text" placeholder="Ternopil"></Input>
                </div>
            </Col>
            <Col className={style.AddessResume}>
                <div className={style.Address}>
                    <Label>Address</Label>
                    <Input type="text" placeholder="Ternopil"></Input>
                </div>
                <div className={style.Nationality}>
                    <Label>Nationality</Label>
                    <Input type="text"></Input>
                </div>
            </Col>
            <Col className={style.BirthReusme}>
                <div className={style.PlaceBirth}>
                    <Label>Place Of Birth</Label>
                    <Input type="text"></Input>
                </div>
                <div className={style.DateBirth}>
                    <Label>Date Of Birth</Label>
                    <Input type="date" ></Input>
                </div>
            </Col>
        </div>
    );
}

const AddEmployment = ()=>{
    return (
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
            <div className={style.StartEndDate}>
                <div className={style.StartDate}>
                    <Input type="date"></Input>
                </div>    
                <div className={style.EndDate}>
                    <Input type="date"></Input>
                </div>    
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

    );
}

const AddEducation = ()=>{
    return (
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
            <div className={style.StartEndDate}>
                <div className={style.StartDate}>
                    <Input type="date"></Input>
                </div>    
                <div className={style.EndDate}>
                    <Input type="date"></Input>
                </div>    
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
    );
}

const AddLink = ()=>{
    return (
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
    );
}

const AddSkill = ()=>{
    return (
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
    );
}

const AddLanguage = ()=>{
    return (
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
    );
}

export default CreateResumePage;