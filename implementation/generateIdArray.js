const generateID = require('./lib/generateID')

exports.handler = function(event, context, callback) {
    
    callback(null, generateID(event))
}