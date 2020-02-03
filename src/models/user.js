import Crypto from 'crypto';
import Collection from '../utils/collection';
import uuid from 'uuid/v4';

/*
user{
    id: String
    username: String,
    password: String,
    accessToken:[{
        token: String,
        expiresAt: Date
    }],
    profile: {
        name: String,
        avatar: Image
    }
    CreateAt: Date,
}
*/
const encrypt = (string)=>{
    let crypto = new Crypto('totalyKey');
    return crypto.encrypt(string);
}

const initUser = (username, password)=> {
    return {
        id: uuid(),
        username,
        password: encrypt(password),
        profile:{
            name:'',
            avatar: null,
        },
        createAt: new Date(),
        accessToken: []
    }
}

class User{
    constructor(){
        this.collection = new Collection('users');
    }

    createUser = (username, password)=>{
        
    }

    

}