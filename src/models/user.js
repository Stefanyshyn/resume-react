import Crypto from 'crypto';
import Collection from '../utils/collection';
import uuid from 'uuid/v4';
import _ from 'lodash';
/*
user{
    id: String
    username: String,
    password: String,
    accessTokens:[{
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

const TOKEN_EXPIRATION_TIME = 30*60*1000;

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
        accessTokens: []
    }
}

class User{
    constructor(){
        this.collection = new Collection('users');
    }

    createUser = (username, password)=>{
        if(!_.isEmpty(this.collection.findOne({}))){
            throw new Error('Username is taken');
        }
        let user = initUser(username, password);
        let accessToken = this.addAccessToken();
        this.collection.add(user);
        return accessToken;
    }

    addAccessToken = (user)=>{
        let accessToken = this.generateAccessToken();
        const accessTokens = [...user.accessTokens, accessToken];
        this.collection.updateOne({...user},{accessTokens});
        user.accessTokens = accessTokens;
        return user;
    }

    generateAccessToken = ()=> ({
        token: uuid(),
        expiresAt: new Date(Date.now() + TOKEN_EXPIRATION_TIME)
    })

    login = () => {
        
    }

}

export default new User();