import _ from 'lodash';
import uuid from 'uuid/v4'

const PREFIX = '__collection__';

class Collection{
    constructor(name){
        this.name = name;
        this.items = this._loadItems();
        this.items = [{id:1,accessTokens: []},{id:2,accessTokens: []},{id:1,accessTokens: []},{id:3,accessTokens: []}];
    }

    find = (predicate)=> _.filter(this.items, predicate);

    findOne = (predicate)=> _.find(this.items, predicate);

    remove = (predicate) => _.remove(this.items, predicate);

    add = (doc)=>{
        if(!('id' in doc))
        {
            doc.id = uuid();
        }
        this.items.push(doc);
        return doc;
    }

    update = (predicate, source)=>{
        if(_.isEmpty(predicate)) return undefined;
        let editItems = _.filter(this.items, predicate);
        editItems.forEach((item)=>{
            _.merge(item, source);
        })
        return editItems;
    }

    updateOne = (predicate, source)=>{
        if(_.isEmpty(predicate)) return undefined;
        let doc = _.find(this.items, predicate);
        
        _.merge(doc, source);
        return doc;
    }
    
    _loadItems = ()=> this.items = JSON.parse(localStorage.getItem(PREFIX+this.name)) || [];
    _saveItems = ()=> localStorage.setItem(PREFIX+this.name, JSON.stringify(this.items));
}

export default Collection;