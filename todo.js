'use strict'

var _data = []

/**
 * Add the task to the todo list
 * returns - true if the task was added successfully, false otherwise
 */
exports.add = (body) => {
    try {
        const result = JSON.parse(body)
        _data.push(result)
        return { 'code': 201, 'body': 'Add new item success' }
    } catch (err) {
        return { 'code': 410, 'body': 'Required JSON object' }
    }
}

/**
 * List the tasks in the todo list
 * returns - A JSON string representing the tasks in the todo list
 */
exports.list = () => {
    return { 'code': 200, 'body': _data.map((item, index) => ({ id: index, ...item }))
    }
}

/**
 * Find the index of the task in the todo list and remove the task from the todo list 
 * returns - true if the task was removed successfully, false otherwise
 */
exports.remove = (body) => {
    try {
        const result = JSON.parse(body);
        const taskToRemove = result.hasOwnProperty('task') ? result.task : null;
  
        if (taskToRemove === null) {
            return { 'code': 400, 'body': 'Required Task value' };
        }
  
        const index = _data.findIndex(item => item.task === taskToRemove);
  
        if (index !== -1) {
            _data.splice(index, 1);
            return { 'code': 201, 'body': 'Remove item successfully' };
        } else {
            return { 'code': 400, 'body': 'No item exist in the list' };
        }
    } catch (err) {
        return { 'code': 410, 'body': 'Required JSON object ' };
    }
  }