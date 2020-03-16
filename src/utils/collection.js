import _ from 'lodash';
import uuid from 'uuid/v4'

const PREFIX = '__collection__';

class Collection{
    constructor(name){
        this.name = name;
        this.items = this._loadItems();
    }

    find = (predicate)=> _.filter(this.items, predicate);

    findOne = (predicate)=> _.find(this.items, predicate);

    remove = (predicate) => {
        let removeItems = _.remove(this.items, predicate);
        this._saveItems();
        return removeItems;
    }

    add = (doc)=>{
        if(!('id' in doc))
        {
            doc.id = uuid();
        }
        this.items.push(doc);
        this._saveItems();
        return doc;
    }

    update = (predicate, source)=>{
        if(_.isEmpty(predicate)) return undefined;
        let editItems = _.filter(this.items, predicate);
        editItems.forEach((item)=>{
            _.assign(item, source);
        })
        this._saveItems();
        return editItems;
    }

    updateOne = (predicate, source)=>{
        if(_.isEmpty(predicate)) return undefined;
        let doc = _.find(this.items, {...predicate});

        _.assign(doc, source);

        this._saveItems();

        return doc;
    }
    
    _loadItems = ()=> this.items = JSON.parse(localStorage.getItem(PREFIX+this.name)) || [];
    _saveItems = ()=> localStorage.setItem(PREFIX+this.name, JSON.stringify(this.items));
}

export default Collection;