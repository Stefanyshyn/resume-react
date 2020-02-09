import React from 'react';
import collection from '../utils/collection';
import ModelUser from '../models/user-front';

const coll = new collection();

// const encrypt = (string)=>{
//     let crypto = new Crypto('totalyKey');
//     return crypto.encrypt(string);
// }


const test = (props)=>{
    return (
        <div>
        <br/>
        {   
            JSON.stringify(ModelUser._loadAccessToken)
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