import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResumePage.module.css';
import { Form, FormGroup, Label, Input, Col, Media } from 'reactstrap';
import * as CreateResume from '../../components/CreateResume';
import Uploader from '../../utils/uploader';
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

            job: '',
            firstname: '',
            lastname: '',
            avatar: '',
            newAvatar:'',
            email:'',
            phone:'',
            country: '',
            city: '',
            address: '',
            nationality: '',
            birthPleca: '',
            birthday:'',
            //   /|\
            //  / | \
            // /  |  \
            //    |
            //    |
            //    |
            // personal data 
            profSummary: '',
            employments:[ ] ,
            educations:[] ,
            links:[] ,
            skills:[]
            // skill
            // {
            //     skill: '',
            //     degree: ''
            // }
            ,
            languages:[]
            // language
            // {
            //     language: '',
            //     level: ''
            // }
            ,
            hobbies:''
            ,

        }
    }

    addEmploymant = (employment)=>{
        this.setState({
            employments:[
                ...(this.state.employments),
                employment
            ]
        })
    }
    addEducation = (education)=>{
        this.setState({
            educations:[
                ...(this.state.educations),
                education
            ]
        })
    }
    addLink = (link)=>{
        this.setState({
            links:[
                ...(this.state.links),
                link
            ]
        })
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

    handleChange = (e)=>{
        let { name, value } = e.target;
        this.setState({ [name]:value })
    }

    handleSelectFile = (e)=>{
        e.preventDefault();
        let input = document.createElement('input');
        input.type = 'file';
        
        input.onchange = (e) =>{ 
            let file = e.target.files[0]; 
            this.setState({
                avatar: URL.createObjectURL(file),
                newAvatar: file
            })
        }
        
        input.click();
    }
    handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(this.state);
        const {
            newAvatar
        } = this.state;
        
        // let urlImage = await Uploader.upload(newAvatar);
        // console.log(urlImage);

    }

    render = ()=> {
        const {
            avatar
        } = this.state;
        const { 
            isAddEducation,isPersonalAddition,
            isAddEmployment, isAddLink, 
            isAddSkill, isAddLanguage 
        } = this.state;
        const { 
            handleClickPersonalAddional,handleClickAddEmployment,
            handleClickAddEducation, handleClickAddLink, 
            handleClickAddSkill, handleClickAddLanguage,
            handleSelectFile, handleSubmit,
            handleChange, 
            addEmploymant, addEducation,
            addLink
        } = this;
        const{
            PersonalAddionalDetails, AddEmployment,
            AddEducation, AddLink,
            AddSkill, AddLanguage
        } = CreateResume;
        
        return (
            <Form name='resumeForm' onSubmit={handleSubmit}>
                <FormGroup>
                    <h1>Personal data</h1>
                     <Col className={style.JobAvatar}>
                        <div className={style.JobResume}>
                            <Label>Job title</Label>
                            <Input type="text" name='job' placeholder="e.g. Teacher" onChange={handleChange}></Input>
                        </div>
                        <div className={style.AvatarResume}>
                            <div className={style.avatar}>
                                {avatar?
                                <Media width='100' height='100' src={avatar} alt='Picture'></Media>
                                :
                                <Media width='100' height='100' src='https://image.flaticon.com/icons/svg/1077/1077114.svg' alt='Picture'></Media>
                                }
                            </div>
                            <div className={style.avatarSetting}>
                                <div onClick={handleSelectFile}>
                                    <Media width="24" height="24" viewBox="0 0 24 24"  src='https://image.flaticon.com/icons/png/128/1001/1001371.png' alt=" * "/>
                                    <span>Edit photo</span>
                                    <div className={style.FocusDiv}></div>
                                </div>
                                <div>
                                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/748/748023.svg' alt=" - "/>
{
    "" //TODO: delete avatar resume
}
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className={style.nameResume}>
                        <div className={style.Firstname}>
                            <Label for="firstname">First Name</Label>
                            <Input type="text" name="firstname" placeholder="John" onChange={handleChange}></Input>
                        </div>
                        <div className={style.Lastname}>
                            <Label for='lastname'>Last Name</Label>
                            <Input type="text" name='lastname' placeholder='Steph' onChange={handleChange}></Input>
                        </div>
                    </Col>
                    <Col className={style.ContactInfoResume}>
                        <div className={style.EmailResume}>
                            <Label for='email'>Email</Label>
                            <Input type="text" name='enail' placeholder="example@example.com" onChange={handleChange} />
                        </div>
                        <div className={style.NumberResume}>
                            <Label for='phone' >Phone</Label>
                            <Input type="text" name='phone' placeholder="--- -- --- -- ---" onChange={handleChange}></Input>
                        </div>
                    </Col>
                    {isPersonalAddition?
                        <PersonalAddionalDetails handleChange={handleChange}/>
                        :
                        ''
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
                        <Input rows={4} type="textarea" style={{resize: 'none'}} name='profSummary' onChange={handleChange}></Input>
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
                        <AddEmployment addEmploymant={addEmploymant}/>
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
                        <Col className={style.add} onClick={handleClickAddEducation}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                            <span>Add education</span>
                        </Col>
                        :
                        <AddEducation addEducation={addEducation}/>
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
                            <AddLink addLink={addLink}/>
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
                <FormGroup >
                    <Col>
                        <div className={style.btnSave + " " + style.Input}>
                            <Input className="btn btn-dark" value="Save" name="save" type="submit"/>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default CreateResumePage;