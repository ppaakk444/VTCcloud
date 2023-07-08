'use strict'

var getRawBody = require('raw-body');
const todo = require('./todo.js')

/**
 * index.handler
 * Entry point of the API
 */
exports.handler = (req, resp, context) => {
  resp.setHeader('content-type', 'application/json')
  var uri = (req.url).split('/')
    if(uri.length == 0) {
      resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad request'}))
    } else {
      var route = uri[uri.length-1]
      switch(req.method) {
        case 'GET':
          switch (route) {
            case "list":
              resp.send(JSON.stringify( todo.list() ))
              break
            default:
              resp.send(JSON.stringify( {'code': 400, 'body': 'Bad request' } ))
              break
            }
          break

        case 'POST':
          switch (route) {
            case "add":
          getRawBody(req, (err, body) => {
            resp.send(JSON.stringify( todo.add(body) ))})
            break
          default:
            resp.send(JSON.stringify( {'code': 400, 'body': 'Bad request' } ))
            break
        }
      break

      case 'PUT': 
        switch (route) {
          case "remove":
            resp.send(JSON.stringify( todo.remove() ))
            break
          default:
            resp.send(JSON.stringify( {'code': 400, 'body': 'Bad request' } ))
            break
        }

      case 'DELETE':
        switch (route) {
          case "remove":
            resp.send(JSON.stringify( todo.remove() ))
            break
          default:
            resp.send(JSON.stringify( {'code': 400, 'body': 'Bad request' } ))
            break
        }
      default:
        resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad requset' }))
    }
  }
}