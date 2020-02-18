import React from 'react';
import { Media, Label, Input, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResume.module.css';

const PersonalAddionalDetails = ({handleChange})=>{
    return (
        <div>
            <Col className={style.AddessResume}>
                <div className={style.CountryResume}>
                    <Label for='country'>Country</Label>
                    <Input type="text" name='country' placeholder="Ukraine" onChange={handleChange}></Input>
                </div>
                <div className={style.CityResume}>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' placeholder="Ternopil"></Input>
                </div>
            </Col>
            <Col className={style.AddessResume}>
                <div className={style.Address}>
                    <Label for='address'>Address</Label>
                    <Input type="text" name='address' onChange={handleChange}></Input>
                </div>
                <div className={style.Nationality}>
                    <Label for='nationality'>Nationality</Label>
                    <Input type="text" name='nationality' onChange={handleChange}></Input>
                </div>
            </Col>
            <Col className={style.BirthReusme}>
                <div className={style.PlaceBirth}>
                    <Label for='birthPleca'>Place Of Birth</Label>
                    <Input type="text" name='birthPleca' onChange={handleChange}></Input>
                </div>
                <div className={style.DateBirth}>
                    <Label for='birthday'>Date Of Birth</Label>
                    <Input type="date" name='birthday' onChange={handleChange}></Input>
                </div>
            </Col>
        </div>
    );
}

class AddEmployment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            job:'',
            employer:'',
            startDate: '',
            endDate: '',
            city:'',
            description:''
        }
    }
    handleChange = (e)=>{
            let { name, value } = e.target;
            this.setState({ [name]:value })
    }
    handleAddEmployment = (e) => {
        const {
            job, employer,
            startDate, endDate,
            city, description
        } = this.state;
        const {addEmploymant} = this.props;
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

    render = () => {
        const {
            handleChange, handleAddEmployment
        } = this;

        return (
            <Col>
                <div>
                    <Label for='job'>Job Title</Label>
                    <Input type="text" name='job' onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='employer'>Employer</Label>
                    <Input type="text" name='employer' onChange={handleChange}></Input>
                </div>
                <div>
                    <span>Star and End Date</span>
                    <div className={style.StartEndDate}>
                        <div className={style.StartDate}>
                            <Input type="date" name='startDate' onChange={handleChange}></Input>
                        </div>    
                        <div className={style.EndDate}>
                            <Input type="date" name='endDate' onChange={handleChange}></Input>
                        </div>    
                    </div>
                </div>
                <div>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='description'>Description</Label>
                    <Input rows={4} type="textarea" name='description' style={{resize: 'none'}}  onChange={handleChange}></Input>
                </div>
                <Button onClick={handleAddEmployment}> 
                <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save employment</span>
                    </Col>
                </Button>
            </Col>
        );
    }
}
class AddEducation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            establishment:'',
            degree: '',
            startDate:'',
            endDate:'',
            city: '',
            description: ''
        }
    }
    handleChange = (e)=>{
        let { name, value } = e.target;
        this.setState({ [name]:value })
    }
    handleAddEducation = ()=>{
        const {
            establishment, degree,
            startDate, endDate,
            city, description
        } = this.state;
        const {addEducation} = this.props;
        let education = {
            establishment, 
            degree,
            startDate,
            endDate,
            city,
            description
        }
        addEducation(education);

    }

    render = ()=>{
        const {
            handleAddEducation, handleChange
        } = this;

        return (
            <Col>
                <div>
                    <Label for='establishment'>Establishment</Label>
                    <Input type="text" name='establishment' onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='degree'>Degree</Label>
                    <Input type="text" name='degree' onChange={handleChange}></Input>
                </div>
                <div>
                    <span>Star and End Date</span>
                    <div className={style.StartEndDate}>
                        <div className={style.StartDate}>
                            <Input type="date" name='startDate' onChange={handleChange}></Input>
                        </div>    
                        <div className={style.EndDate}>
                            <Input type="date" name='endDate' onChange={handleChange}></Input>
                        </div>    
                </div>
                </div>
                <div>
                    <Label for='city'>City</Label>
                    <Input type="text" name='city' onChange={handleChange}></Input>
                </div>
                <div>
                    <Label for='description'>Description</Label>
                    <Input rows={4} type="textarea" style={{resize: 'none'}} 
                        name='description' onChange={handleChange} />
                </div>
                <Button onClick={handleAddEducation}> 
                <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save employment</span>
                    </Col>
                </Button>
            </Col>
        );
    }
}
class AddLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            PathURL: '',
        }
    }
    handleChange = (e)=>{
        let { name, value } = e.target;
        this.setState({ [name]:value })
    }
    handleAddLink = ()=>{
        const {
            title, PathURL,
        } = this.state;

        const {addLink} = this.props;

        let link = {
            title, 
            PathURL,
        }
        addLink(link);
    }

    render = ()=>{
        const {
            handleAddLink, handleChange
        } = this;
    
        return (
        <Col>
            <div>
                <Label for='a'>Title</Label>
                <Input type="text" name='a' onChange={handleChange}></Input>
            </div>
            <div>
                <Label for='a'>URL-path</Label>
                <Input type="text" name='a' onChange={handleChange}></Input>
            </div>
            <Button onClick={handleAddLink}> 
                <Col className={style.add}>
                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                    <span>Save employment</span>
                </Col>
            </Button>
        </Col>
    );

    }
}
class AddSkill extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skill:'',
            degree: '',
        }
    }
    handleChange = (e)=>{
        let { name, value } = e.target;
        this.setState({ [name]:value })
    }
    handleAddSkill = ()=>{
        const {
            skill, degree,
        } = this.state;

        const {addSkill} = this.props;

        let _skill = {
            skill, 
            degree
        }
        addSkill(_skill);
    }
    render = ()=>{
        const {
            handleAddSkill, handleChange
        } = this;
    
        return (
            <Col>
                <div>
                    <Label for='skill'>Skill</Label>
                    <Input type="text" name='skill' onChange={handleChange}/>
                </div>
                <div>
                    <Label for='degree'>Degree</Label>
                    <Input type="text" name='degree' onChange={handleChange}/>
                </div>
                <Button onClick={handleAddSkill}> 
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save employment</span>
                    </Col>
                </Button>
            </Col>
        );
    }
}
class AddLanguage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            language:'',
            level: '',
        }
    }
    handleChange = (e)=>{
        let { name, value } = e.target;
        this.setState({ [name]:value })
    }
    handleAddLanguage = ()=>{
        const {
            language, level,
        } = this.state;

        const {addLanguage} = this.props;

        let _language = {
            language, 
            level,
        }
        addLanguage(_language);
    }
    render = ()=>{
        const {
            handleAddLanguage, handleChange
        } = this;
        return (
            <Col>
                <div>
                    <Label for='language'>Language</Label>
                    <Input type="text" name='language' onChange={handleChange}/>
                </div>
                <div>
                    <Label for='level'>Level</Label>
                    <Input type="text" name='level' onChange={handleChange}/>
                </div>
                <Button onClick={handleAddLanguage}> 
                    <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save language</span>
                    </Col>
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