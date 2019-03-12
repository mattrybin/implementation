var R = require('ramda');
var randomJs = require("random-js")

function createId (min, max) {
    const random = new randomJs(randomJs.engines.browserCrypto)
    return random.integer(min, max)
}

function createArray(amount) {
  let array = []
  while (array.length !== amount) {
    array = R.pipe(
      R.append(createId(1, 2000)),
    )(array)
  }
  return array
}

function generateID (amount) {
    return createArray(amount)
}

module.exports = generateID