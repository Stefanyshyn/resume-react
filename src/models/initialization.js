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
}

export default new Initialization();