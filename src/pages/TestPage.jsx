import React from 'react';
import collection from '../utils/collection';

const coll = new collection();

const test = (props)=>{
    return (
        <div>
        {
            JSON.stringify(coll.add({a:1}))
        }
        <br/>
         {   JSON.stringify(coll.find({}))
        }
        <br/>
         {   JSON.stringify(coll.edit({id:1}, {id: 8}))
        }
        </div>
    );
}

export default test;