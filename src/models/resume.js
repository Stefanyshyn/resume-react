import Collection from '../utils/collection';

class Resume {
    collection = new Collection('post')

    get = (predicate)=>{
        return this.collection.find(predicate);
    }

    add = (resume) =>{
        return this.collection.add(resume)
    }




}

export default new Resume();