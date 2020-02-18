import React from 'react';
import { Media, Label, Input, Col, Form, Button } from 'reactstrap';
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
             // employer
            // {
            //     job:'',
            //     employer: '',
            //     startDate:'',
            //     endDate:'',
            //     city: '',
            //     description: ''
            // }
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
    handleSubmitAddEmployment = (e) => {
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
            handleChange, handleSubmitAddEmployment
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
                <Button onClick={handleSubmitAddEmployment}> 
                <Col className={style.add}>
                        <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/482/482459.svg' alt=" o "/>
                        <span>Save employment</span>
                    </Col>
                </Button>
            </Col>
        );
    }
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
export {
    PersonalAddionalDetails, AddEmployment,
    AddEducation, AddLink,
    AddSkill, AddLanguage
};