'use strict';

/**
 * todo.js
 * Sample Todo Notebook for demonstrating serverless API development 
 */

var _data = [];

exports.remove = () => {    
    if(_data.length>0){
        _data.pop();
        return {'code': 201, 'body': 'Last item remove Success'};
    }
    return {'code': 409, 'body': 'No item exist in the list'};
}

exports.add = (body) => {        
    var newitem = (JSON.parse(body)).name;    
    _data.push(newitem);
    return {'code': 201, 'body': 'Add new item success'};
}

exports.count = () => {
    return _data.length;
}

exports.clear = () => {
    _data = [];
    return {'code': 201, 'body': 'Request success'};
}

exports.getAll = () => {
    return _data;
}