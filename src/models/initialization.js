import _ from 'lodash';
import uuid from 'uuid/v4';
import ResumeModel from '../models/resume';

class Initialization {
    user = (user)=>{
        if(_.isEmpty(user))
            return {
                id: uuid(),
                profile:{
                    name: 'No name',
                    avatar: 'https://image.flaticon.com/icons/svg/1077/1077114.svg'
                }
            }
    }
    resume = (resume)=>{
        if(_.isEmpty(resume)){
            console.log(resume)
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
        }
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