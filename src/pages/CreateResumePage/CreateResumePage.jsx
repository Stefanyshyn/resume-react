import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResumePage.module.css';
import { Form, FormGroup, Label, Input, Col, Media, Spinner } from 'reactstrap';
import * as FormsResume from '../../components/Resume/Form';
import Uploader from '../../utils/uploader';
import ResumeModel from '../../models/resume';
import UserModel from '../../models/user-front';
import init from '../../models/initialization.js';
import ItemResume from '../../components/Resume/Field';

const Title = (text)=>{
    return (        
    <Col><h1>{text}</h1>
        </Col>
    );
}

class CreateResumePage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.user = UserModel.getCurrentUser();
        let _resumeFind = ResumeModel.getOne({id:this.props.match.params['resumeId']});
        let resume = init.resume(_resumeFind)
        this.state = {
        indexEmployment: -1,
        isPersonalAddition: false,
        isAddEmployment: false,
        isAddEducation: false,
        isAddLink: false,
        isAddSkill: false,
        isAddLanguage: false,
        isSaveResume: false,
        isUpdateResume: _resumeFind?true:false,
        activeNumber:{
            employment:-1,  
            education:-1,  
            link:-1,  
            skill:-1,  
            language:-1,  
            },
            ...resume

        }
    }

    addEmployment = (employment)=>{
        let {isAddEmployment} = this.state;
        
        this.setState({
            isAddEmployment: !isAddEmployment,
            indexEmployment: (this.state.employments.length)-1,
            employments:[
                ...(this.state.employments),
                employment
            ],
        })
    }
    addEducation = (education)=>{
        let {isAddEducation} = this.state;
        this.setState({
            isAddEducation: !isAddEducation,
            educations:[
                ...(this.state.educations),
                education
            ]
        })
    }
    addLink = (link)=>{
        let {isAddLink} = this.state;
        this.setState({
            isAddLink: !isAddLink,
            links:[
                ...(this.state.links),
                link
            ]
        })
    }
    addSkill = (skill)=>{
        let {isAddSkill} = this.state;
        this.setState({
            isAddSkill: !isAddSkill,
            skills:[
                ...(this.state.skills),
                skill
            ]
        })
    }
    addLanguage = (language)=>{
        let {isAddLanguage} = this.state;
        this.setState({
            isAddLanguage: !isAddLanguage,
            languages:[
                ...(this.state.languages),
                language
            ]
        })
    }
    
    handleRemoveItemHistory = (nameHistory, id)=>{
        this.setState(
            {
                [nameHistory+'s']: this.state[nameHistory+'s'].filter( item => {
                    if(item.id !== id)
                     return false;
                     return true;
                }),
                activeNumber:
                {
                    [nameHistory]:id 
                },
            }
        )
    }

    handleClickEdit = (nameHistory, id, itemHistory)=>{
        this.setState(
            {
                [nameHistory+'s']: this.state[nameHistory+'s'].map((item)=>{
                    if(item.id === itemHistory.id)
                        return itemHistory;
                        return item;
                }),
                activeNumber:
                {
                    [nameHistory]:id 
                },
            }
        )
    }
    
    handleClickPersonalAddional = (e) =>{
        let {isPersonalAddition} = this.state;
        this.setState({isPersonalAddition: !isPersonalAddition});
    }

    handleClickAddEmployment = (e) =>{
        let {employments} = this.state;
        this.setState({
            activeNumber:{employment:this.state.employments.length},
            employments: [...employments, init.employment()]})

    }
    handleClickAddEducation = (e) =>{
        let {educations} = this.state;
        this.setState({
            activeNumber:{education:this.state.educations.length},
            educations: [...educations, init.education()]
        })
    }
    handleClickAddLink = (e) =>{
        let {links} = this.state;
        this.setState({
            activeNumber:{link:this.state.links.length},
            links:[...links, init.link()]
        });
    }
    handleClickAddSkill = (e) =>{
        let {skills} = this.state;
        this.setState({
            activeNumber:{skill:this.state.skills.length},
            skills:[...skills, init.skill()]
        });
    }
    handleClickAddLanguage = (e) =>{
        let {languages} = this.state;
        this.setState({
            activeNumber:{language:this.state.languages.length},
            languages:[...languages, init.language()]
        });
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
    
    handleDeleteAvatar = (e)=>{
        this.setState({avatar:'', newAvatar: ''})
    }

    handleSubmit = async(e)=>{
        e.preventDefault();
        const {
            isUpdateResume,
            isSaveResume
        } = this.state;

        this.setState({isSaveResume:!isSaveResume})
        
        const {
            id, job, firstname, lastname, avatar, newAvatar,
            email, phone, country, city, address,
            nationality, birthPlace, birthday, profSummary, employments,
            educations, links, skills, languages, hobbies
        } = this.state;
        
        let urlImage = newAvatar?await Uploader.upload(newAvatar):avatar;
        
        let resume = {
            id,
            idUser: this.user.id,
            job,
            firstname,
            lastname,
            avatar: urlImage,
            email,
            phone,
            country,
            city,
            address,
            nationality,
            birthPlace,
            birthday,
            profSummary,
            employments,
            educations,
            links,
            skills,
            languages,
            hobbies            
        }
     
        if(isUpdateResume){
            ResumeModel.update({id:resume.id}, resume);
        }
        else{
            ResumeModel.add(resume);
        }
        this.setState({isSaveResume:isSaveResume})
        this.setState({isUpdateResume:!isUpdateResume})
    }

    render = ()=> {
        const {
            job, firstname, lastname, avatar,
            email, phone, country, city, address,
            nationality, birthPlace, birthday, profSummary, employments,
            educations, links, skills, languages, hobbies
        } = this.state;
        const { 
            isPersonalAddition, isSaveResume 
        } = this.state;
        const { 
            handleClickPersonalAddional,handleClickAddEmployment,
            handleClickAddEducation, handleClickAddLink, 
            handleClickAddSkill, handleClickAddLanguage,
            handleSelectFile, handleDeleteAvatar,
            handleSubmit, handleChange, 
            addEmployment, addEducation,
            addLink, addSkill, addLanguage,
            handleClickEdit,handleRemoveItemHistory
        } = this;
        const{
            PersonalAddionalDetails, AddEmployment,
            AddEducation, AddLink,
            AddSkill, AddLanguage
        } = FormsResume;
        let {EmploymentHistoryItem, EducationHistoryItem, LinkItem, SkillItem, LanguageItem} = ItemResume;
        return (
            <Form name='resumeForm' onSubmit={handleSubmit}>
                <FormGroup>
                    {Title('Personal data')}
                    <Col className={style.JobAvatar}>
                        <div className={style.JobResume}>
                            <Label>Job title</Label>
                            <Input type="text" name='job' value={job} placeholder="e.g. Teacher" onChange={handleChange}></Input>
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
                                <div onClick={handleDeleteAvatar}>
                                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/748/748023.svg' alt=" - "/>
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className={style.nameResume}>
                        <div className={style.Firstname}>
                            <Label for="firstname">First Name</Label>
                            <Input type="text" name="firstname" value={firstname} placeholder="John" onChange={handleChange}></Input>
                        </div>
                        <div className={style.Lastname}>
                            <Label for='lastname'>Last Name</Label>
                            <Input type="text" name='lastname' value={lastname} placeholder='Steph' onChange={handleChange}></Input>
                        </div>
                    </Col>
                    <Col className={style.ContactInfoResume}>
                        <div className={style.EmailResume}>
                            <Label for='email'>Email</Label>
                            <Input type="text" name='email' value={email} placeholder="example@example.com" onChange={handleChange} />
                        </div>
                        <div className={style.NumberResume}>
                            <Label for='phone' >Phone</Label>
                            <Input type="text" name='phone' value={phone} placeholder="--- -- --- -- ---" onChange={handleChange}></Input>
                        </div>
                    </Col>
                    {isPersonalAddition?
                        <PersonalAddionalDetails resume={{country, city, address, nationality, birthPlace, birthday}} handleChange={handleChange}/>
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
                    <Col className={style.TitleArticle}>
                        <span >
                            Include several sentences about your total experience
                        </span>
                    </Col>
                    <Col>
                        <Input className='form=control' rows={4} type="textarea" style={{resize: 'none'}} value={profSummary} name='profSummary' onChange={handleChange}></Input>
                    </Col>
                </FormGroup>       
                <FormGroup>
                    {Title('Employment History')}
                    <Col className={style.TitleArticle}>
                        <span>
                            Include your relevant experience and dates in this section. List your most recent position first.
                        </span>
                    </Col>
                    <Col className={style.containerItem}>
                        {   
                            employments.map((employment,index) => {
                                return (
                                    <EmploymentHistoryItem handleClickEdit={handleClickEdit.bind(this, 'employment')} 
                                    key={Math.random()} id={index} isEdit={this.state.activeNumber.employment === index?true:false} 
                                    addHistory={addEmployment} itemHistory={employment} 
                                    EditComponet={AddEmployment}
                                    handleRemoveItemHistory={handleRemoveItemHistory.bind(this, 'employment', employment.id)}/>
                                );
                            })
                        }
                    </Col>
                    <Col className={style.add} onClick={handleClickAddEmployment}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add employment</span>
                    </Col>
                </FormGroup>                
                <FormGroup>
                    {Title('Education History')}
                    <Col className={style.TitleArticle}>
                        <span>
                            Include your most recent educational achievements and the dates
                        </span>
                    </Col>
                    <Col className={style.containerItem}>
                    {
                        educations.map((education, index )=>{
                            return(
                                <EducationHistoryItem handleClickEdit={handleClickEdit.bind(this, 'education')} 
                                key={Math.random()} id={index} isEdit={this.state.activeNumber.education === index?true:false} 
                                addHistory={addEducation} itemHistory={education} 
                                EditComponet={AddEducation}
                                handleRemoveItemHistory={handleRemoveItemHistory.bind(this, 'education', education.id)}/>
                            );
                        })
                    }
                    </Col>
                     <Col className={style.add} onClick={handleClickAddEducation}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add education</span>
                    </Col>
                </FormGroup>
                <FormGroup>
                    {Title('Links')}
                    <Col className={style.TitleArticle}>
                        <span>
                            Perhaps It will be  a link to your portfolio or personal website
                        </span>
                    </Col>
                    <Col className={style.containerItem}>
                    {
                        links.map((link, index )=>{
                            return(
                                <LinkItem handleClickEdit={handleClickEdit.bind(this, 'link')} 
                                key={Math.random()} id={index} isEdit={this.state.activeNumber.link === index?true:false} 
                                addHistory={addLink} itemHistory={link} 
                                EditComponet={AddLink}
                                handleRemoveItemHistory={handleRemoveItemHistory.bind(this, 'link', link.id)}/>
                            );
                        })
                    }
                    </Col>
                    <Col className={style.add} onClick={handleClickAddLink}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add link</span>
                    </Col>
                </FormGroup>
                <FormGroup>
                    {Title('Skills')}
                    <Col className={style.containerItem}>
                    {
                        skills.map((skill, index )=>{
                            return(
                                <SkillItem handleClickEdit={handleClickEdit.bind(this, 'skill')} 
                                key={Math.random()} id={index} isEdit={this.state.activeNumber.skill === index?true:false} 
                                addHistory={addSkill} itemHistory={skill} 
                                EditComponet={AddSkill}
                                handleRemoveItemHistory={handleRemoveItemHistory.bind(this, 'skill', skill.id)}/>
                            );
                        })
                    }
                    </Col>
                    <Col className={style.add} onClick={handleClickAddSkill}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add skill</span>
                    </Col>
                </FormGroup>
                <FormGroup>
                    {Title('Languages')}
                    <Col className={style.containerItem}>
                    {
                        languages.map((language, index )=>{
                            return(
                                <LanguageItem handleClickEdit={handleClickEdit.bind(this, 'language')} 
                                key={Math.random()} id={index} isEdit={this.state.activeNumber.language === index?true:false} 
                                addHistory={addLanguage} itemHistory={language} 
                                EditComponet={AddLanguage}
                                handleRemoveItemHistory={handleRemoveItemHistory.bind(this, 'language', language.id)}/>
                            );
                        })
                    }
                    </Col>
                    <Col className={style.add} onClick={handleClickAddLanguage}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/808/808559.svg' alt=" + "/>
                        <span>Add language</span>
                    </Col>
                </FormGroup>
                <FormGroup>
                    {Title('Hobbies')}
                    <Col>
                        <Label for='hobbies'>What do you like do?</Label>
                        <Input rows={4} type="textarea" name='hobbies' style={{resize: 'none'}} value={hobbies} onChange={handleChange}></Input>
                    </Col>
                </FormGroup>
                <FormGroup >
                    <Col>
                        <div className={style.btnSave + " " + style.Input}>
                            <Input className="btn btn-dark" value="Save" name="save" type="submit"/>
                            {
                                isSaveResume?
                                <Spinner width='44px' color='gray' ></Spinner>
                                :''
                            }
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default CreateResumePage;