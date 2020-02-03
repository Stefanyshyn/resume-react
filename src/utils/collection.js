import _ from 'lodash';
import uuid from 'uuid/v4'

const PREFIX = '__collection__';

class Collection{
    constructor(name){
        this.name = name;
        this.items = this._loadItems();
    }

    find = (predicate)=> _.filter(this.items, predicate);

    remove = (predicate) => _.remove(this.items, predicate);

    add = (doc)=>{
        if(!('id' in doc))
        {
            doc.id = uuid();
        }
        this.items.push(doc);
        return doc;
    }

    edit = (predicate, source)=>{
        let editItems = _.filter(this.items, predicate);
        editItems.forEach((item)=>{
            _.merge(item, source);
        })
        return editItems;
    }

    _loadItems = ()=> this.items = JSON.parse(localStorage.getItem(PREFIX+this.name)) || [];
    _saveItems = ()=> localStorage.setItem(PREFIX+this.name, JSON.stringify(this.items));
}

export default Collection;