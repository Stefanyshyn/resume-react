import Collection from '../utils/collection';

class Resume {
    collection = new Collection('post')

    get = (predicate)=>{
        return this.collection.find(predicate);
    }
    getOne = (predicate)=>{
        return this.collection.findOne(predicate);
    }

    add = (resume) =>{
        return this.collection.add(resume)
    }

    update = (predicate, resume) => {
        return this.collection.updateOne(predicate, resume);
    }


}

export default new Resume();