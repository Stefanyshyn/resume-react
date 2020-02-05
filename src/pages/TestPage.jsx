import React from 'react';
import collection from '../utils/collection';
import ModelUser from '../models/user';
import Crypto from 'crypto';

const coll = new collection();

// const encrypt = (string)=>{
//     let crypto = new Crypto('totalyKey');
//     return crypto.encrypt(string);
// }


const test = (props)=>{
    console.log(Crypto)
    return (
        <div>
        <br/>
         {   JSON.stringify(coll.find({}))
        }
        <br/>
         {   JSON.stringify(coll.updateOne({id:1}, {id: 8}))
        }
        <br/>
         {   JSON.stringify(ModelUser.addAccessToken({id:1,accessTokens: []}))
        }
        </div>
    );
}

export default test;