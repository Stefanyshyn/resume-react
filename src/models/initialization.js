import _ from 'lodash';
import uuid from 'uuid/v4';
import ResumeModel from '../models/resume';

class Initialization {
    resume = (resume)=>{
        if(_.isEmpty(resume)){
            return {
                id: uuid(),
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
                birthPlace: '',
                birthday:'',
                profSummary: '',
                employments:[ ],
                educations:[],
                links:[],
                skills:[],
                languages:[],
                hobbies:''
            }
        }else 
        return {...ResumeModel.getOne({...resume})}
    }

    employment = (employment)=>{
        if(_.isEmpty(employment)) 
        return {
            id: uuid(),
            job:'',
            employer:'',
            startDate: '',
            endDate: '',
            city: '',
            description: ''
        };
        return employment
    }

    education = (education)=>{
        if(_.isEmpty(education)) 
        return {
            id: uuid(),
            establishment:'',
            degree: '',
            startDate:'',
            endDate:'',
            city: '',
            description: ''
        };
        return education
    }

    link = (link)=>{
        if(_.isEmpty(link)) 
        return {
            id: uuid(),
            title:'',
            pathURL: '',
        };
        return link
    }
    
    skill = (skill)=>{
        if(_.isEmpty(skill)) 
        return {
            id: uuid(),
            skill:'',
            degree: '',
        };
        return skill
    }

    language = (language)=>{
        if(_.isEmpty(language)) 
        return {
            id: uuid(),
            language:'',
            level: '',
        };
        return language
    }

}

export default new Initialization();