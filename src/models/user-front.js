import UserServer from './user';

const ACCESS_TOKEN_PATH = '__access_token__';

class User{
    login = (username, password)=>{
        let accessToken = UserServer.login(username, password);
        this._saveAccessToken(accessToken);
    }

    signup = (username, password)=>{
        let accessToken = UserServer.createUser(username, password);
        this._saveAccessToken(accessToken);
    }

    _saveAccessToken = (accessToken)=>{
        localStorage.setItem(ACCESS_TOKEN_PATH, JSON.stringify(accessToken));
    }

    _loadAccessToken = ()=>{
        return JSON.parse(localStorage.getItem(ACCESS_TOKEN_PATH));
    }

    getUser = ()=>{
        let accessToken = this._loadAccessToken();
        return accessToken;
    }
    
    getCurrentUser = ()=>{
        const accessToken = this._loadAccessToken();
        return UserServer.getByAccessToken(accessToken);
    }
    update = (user) =>{
        return this.update(user);
    }

}

export default new  User();