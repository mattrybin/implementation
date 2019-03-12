const generateID = require('./lib/generateID')

exports.handler = function(event, context, callback) {
    
    //callback(null, generateID(100))
    callback(null, event)
}