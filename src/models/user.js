import md5 from 'md5';
import Collection from '../utils/collection';
import uuid from 'uuid/v4';
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
    return md5(string);
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
        let isExist = !!this.collection.findOne({username});
        if(isExist){
            throw new Error('Username is taken');
        }
        let user = initUser(username, password);
        let accessToken = this.addAccessToken(user);
        this.collection.add(user);
        return accessToken;
    }
    
    addAccessToken = (user)=>{
        let accessToken = this.generateAccessToken();
        const accessTokens = [...user.accessTokens, accessToken];
        this.collection.updateOne({...user},{accessTokens});
        user.accessTokens = accessTokens;
        return accessToken;
    }

    generateAccessToken = ()=> ({
        token: uuid(),
        expiresAt: new Date(Date.now() + TOKEN_EXPIRATION_TIME)
    })

    login = (username, password) => {
        const  user = this.collection.findOne({username, password: encrypt(password)});
        if(!user){
            throw new  Error('Username or password is wrong');
        }
        const accessToken = this.addAccessToken(user);
        return accessToken;        
    }

    getByAccessToken = (accessToken)=>{
        const user = this.collection.findOne({accessTokens:[{
            token: accessToken.token
        }]});
        return user;

    }

    updateOne = (user) => { 
        return this.collection.updateOne({ id:user.id}, user);
    }
}

export default new User();