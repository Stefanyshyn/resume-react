import React from 'react';
import collection from '../utils/collection';
import ModelUser from '../models/user-front';

const coll = new collection();

// const encrypt = (string)=>{
//     let crypto = new Crypto('totalyKey');
//     return crypto.encrypt(string);
// }





const test = (props)=>{
    let currentUser = ModelUser.getCurrentUser();
    const clientId = 'f123024a1dc28dff1cb9864022d2266d5079c7aa';

    return (
        <div>
        <br/>
        {   
            JSON.stringify(currentUser)
        }
        <br/>
        {   
            JSON.stringify(coll.find({}))
        }
        <br/>
        {   
            JSON.stringify(coll.updateOne({id:1}, {id: 8}))
        }
        <br/>
        {   
//            JSON.stringify(ModelUser.addAccessToken({id:1,accessTokens: []}))
        }
        </div>
    );
}

export default test;