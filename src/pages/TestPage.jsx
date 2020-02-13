import React from 'react';
import collection from '../utils/collection';
import ModelUser from '../models/user-front';
import ServerUser from '../models/user';

const coll = new collection();

const test = (props)=>{
    let currentUser = ModelUser.getCurrentUser();
    ServerUser.logout('a3c35918-7e33-4a29-a7a2-0bdfea9efaa7')
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