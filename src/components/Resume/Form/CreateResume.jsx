import React from 'react';
import { Media, Label, Input, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResume.module.css';
import init from '../../../models/initialization';

const PersonalAddionalDetails = ({handleChange, resume})=>{
    const {
        country, city, address, nationality, birthPlace, birthday
    } = resume;

    return (
        <div>
            <Col className={style.AddessResume}>
                <div className={style.CountryResume}>
                    <Label for='country'>Country</Label>
                    <Input type="text" name='country' value={country} placeholder="Ukraine" onChange={handleChange}></Input>
                </div>
                <div className={style.CityResume}>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' value={city} placeholder="Ternopil"  onChange={handleChange}></Input>
                </div>
            </Col>
            <Col className={style.AddessResume}>
                <div className={style.Address}>
                    <Label for='address'>Address</Label>
                    <Input type="text" name='address' value={address} onChange={handleChange}></Input>
                </div>
                <div className={style.Nationality}>
                    <Label for='nationality'>Nationality</Label>
                    <Input type="text" name='nationality' value={nationality} onChange={handleChange}></Input>
                </div>
            </Col>
            <Col className={style.BirthReusme}>
                <div className={style.PlaceBirth}>
                    <Label for='birthPleca'>Place Of Birth</Label>
                    <Input type="text" name='birthPleca' value={birthPlace} onChange={handleChange}></Input>
                </div>
                <div className={style.DateBirth}>
                    <Label for='birthday'>Date Of Birth</Label>
                    <Input type="date" name='birthday' value={birthday} onChange={handleChange}></Input>
                </div>
            </Col>
        </div>
    );
}
class AddEmployment extends React.Component {
    constructor(props){
        super(props);
        this.employment = init.employment(this.props.data);
        this.state={ ...(this.employment)}
    }
    handleAddEmployment = (e) => {
        const {
            job, employer,
            startDate, endDate,
            city, description
        } = this.state;
        const {addHistory} = this.props;
        const addEmploymant = addHistory;
        let employment = {
            job, 
            employer,
            startDate,
            endDate,
            city,
            description
        }
        addEmploymant(employment);
    }

    handleChange = (e)=>{
        const {
            handleChange
        } =this.props;
        let {value, name} = e.target;
        this.setState({[name]:value});
        handleChange(e);
    }
    render = () => {
        const {
            handleAddEmployment,
            handleChange
        } = this;
    

        const {
            job, 
            employer,
            startDate,
            endDate,
            city,
            description
        } = this.state;

        return (
            <Col>
                <div>
                    <Label for='job'>Job Title</Label>
                    <Input type="text" name='job' value={job} onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='employer'>Employer</Label>
                    <Input type="text" name='employer' value={employer} onChange={handleChange}></Input>
                </div>
                <div>
                    <span>Star and End Date</span>
                    <div className={style.StartEndDate}>
                        <div className={style.StartDate}>
                            <Input type="date" name='startDate' value={startDate} onChange={handleChange}></Input>
                        </div>    
                        <div className={style.EndDate}>
                            <Input type="date" name='endDate' value={endDate} onChange={handleChange}></Input>
                        </div>    
                    </div>
                </div>
                <div>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' value={city} onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='description'>Description</Label>
                    <Input rows={4} type="textarea" name='description' style={{resize: 'none'}} value={description}  onChange={handleChange}></Input>
                </div>
                <Button className={style.btnSave + ' btn btn-gray'} onClick={handleAddEmployment}> 
                    <div className={style.divBtnSave}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save employment</span>
                    </div>
                </Button>
            </Col>
        );
    }
}
class AddEducation extends React.Component {
    constructor(props){
        super(props);
        this.education = init.education(this.props.data);
        this.state={ ...(this.education)}
        
    }

    handleAddEducation = ()=>{
        const {
            establishment, degree,
            startDate, endDate,
            city, description
        } = this.state;
        const {addHistory} = this.props;
        const addEmploymant = addHistory;
        let education = {
            establishment, 
            degree,
            startDate,
            endDate,
            city,
            description
        }
        addEmploymant(education);

    }

    handleChange = (e)=>{
        const {
            handleChange
        } =this.props;
        let {value, name} = e.target;
        this.setState({[name]:value});
        handleChange(e);
    }

    render = ()=>{
        const {
            establishment, degree,
            startDate, endDate,
            city, description
        } = this.state;

        const {
            handleAddEducation, handleChange
        } = this;

        return (
            <Col>
                <div>
                    <Label for='establishment'>Establishment</Label>
                    <Input type="text" value={establishment} name='establishment' onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='degree'>Degree</Label>
                    <Input type="text" value={degree} name='degree' onChange={handleChange}></Input>
                </div>
                <div>
                    <span>Star and End Date</span>
                        <div className={style.StartEndDate}>
                        <div className={style.StartDate}>
                            <Input type="date" name='startDate' value={startDate} onChange={handleChange}></Input>
                        </div>    
                        <div className={style.EndDate}>
                            <Input type="date" name='endDate' value={endDate} onChange={handleChange}></Input>
                        </div>    
                    </div>
                </div>
                <div>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' value={city} onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='description'>Description</Label>
                    <Input rows={4} type="textarea" name='description' style={{resize: 'none'}} value={description}  onChange={handleChange}></Input>
                </div>
                <Button className={style.btnSave + ' btn btn-gray'} onClick={handleAddEducation}> 
                    <div className={style.divBtnSave}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save education</span>
                    </div>
                </Button>
            </Col>
        );
    }
}
class AddLink extends React.Component {
    constructor(props){
        super(props);

        let link = init.link(this.props.data);
        this.state = { ...(link) }
    }

    handleAddLink = ()=>{
        const {
            title, pathURL,
        } = this.state;

        const {addHistory} = this.props;
        const addLink = addHistory;

        let link = {
            title, 
            pathURL,
        }
        addLink(link);
    }

    handleChange = (e)=>{
        const {
            handleChange
        } =this.props;

        let {value, name} = e.target;
        this.setState({[name]:value});
        handleChange(e);
    }
    
    render = ()=>{
        const {
            handleAddLink, handleChange
        } = this;
        
        const { 
            title, pathURL
        } = this.state;

        return (
        <Col>
            <div>
                <Label for='title'>Title</Label>
                <Input type="text" value={title} name='title' onChange={handleChange}></Input>
            </div>
            <div>
                <Label for='pathURL'>URL-path</Label>
                <Input type="text" value={pathURL} name='pathURL' onChange={handleChange}></Input>
            </div>
            <Button className={style.btnSave + ' btn btn-gray'} onClick={handleAddLink}> 
                <div className={style.divBtnSave}>
                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                    <span>Save link</span>
                </div>
            </Button>
        </Col>
    );

    }
}
class AddSkill extends React.Component {
    constructor(props){
        super(props);
        this.skill = init.skill(this.props.data);
        this.state = { ...(this.skill) }
        
    }

    handleAddSkill = ()=>{
        const {
            skill, degree,
        } = this.state;

        const {addHistory} = this.props;
        const addSkill = addHistory;
   
        let _skill = {
            skill, 
            degree
        }
        addSkill(_skill);
    }

    handleChange = (e)=>{
        const {
            handleChange
        } =this.props;
        let {value, name} = e.target;
        this.setState({[name]:value});
        handleChange(e);
    }

    render = ()=>{
        const {
            handleAddSkill, handleChange
        } = this;
    
        const {
            skill, degree,
        } = this.state;

        return (
            <Col>
                <div>
                    <Label for='skill'>Skill</Label>
                    <Input type="text" value={skill} name='skill' onChange={handleChange}/>
                </div>
                <div>
                    <Label for='degree'>Degree</Label>
                    <Input type="text" value={degree} name='degree' onChange={handleChange}/>
                </div>
                <Button className={style.btnSave + ' btn btn-gray'} onClick={handleAddSkill}> 
                    <div className={style.divBtnSave}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save skill</span>
                    </div>
                </Button>
            </Col>
        );
    }
}

class AddLanguage extends React.Component {
    constructor(props){
        super(props);
        this.language = init.language(this.props.data);
        this.state={ ...(this.language)}
    }

    handleAddLanguage = ()=>{
        const {
            language, level,
        } = this.state;

        const {addHistory} = this.props;
        const addLanguage = addHistory;

        let _language = {
            language, 
            level,
        }
        addLanguage(_language);
    }

    handleChange = (e)=>{
        const {
            handleChange
        } =this.props;
        let {value, name} = e.target;
        this.setState({[name]:value});
        handleChange(e);
    }
    
    render = ()=>{
        const {
            handleAddLanguage, handleChange
        } = this;
        
        const {
            language, level,
        } = this.state;

        return (
            <Col>
                <div>
                    <Label for='language'>Language</Label>
                    <Input type="text" value={language} name='language' onChange={handleChange}/>
                </div>
                <div>
                    <Label for='level'>Level</Label>
                    <Input type="text" value={level} name='level' onChange={handleChange}/>
                </div>
                <Button className={style.btnSave + ' btn btn-gray'} onClick={handleAddLanguage}> 
                    <div className={style.divBtnSave}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save language</span>
                    </div>
                </Button>
            </Col>
        );
    }
}

export {
    PersonalAddionalDetails, AddEmployment,
    AddEducation, AddLink,
    AddSkill, AddLanguage
};