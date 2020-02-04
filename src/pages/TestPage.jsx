import React from 'react';
import collection from '../utils/collection';

const coll = new collection();

const test = (props)=>{
    return (
        <div>
        <br/>
         {   JSON.stringify(coll.find({}))
        }
        <br/>
         {   JSON.stringify(coll.updateOne({id:1}, {id: 8}))
        }
        </div>
    );
}

export default test;