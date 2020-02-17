import React from 'react';
import { Label, Input, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './CreateResume.module.css';

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
export {
    PersonalAddionalDetails, AddEmployment,
    AddEducation, AddLink,
    AddSkill, AddLanguage
};