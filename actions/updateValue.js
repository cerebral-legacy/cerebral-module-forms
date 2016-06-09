var transformPathToArray = require('./../helpers/transformPathToArray.js')

function updateValue (arg) {
  var input = arg.input
  var state = arg.state
  var pathToField = transformPathToArray(input.field)
  state.set(pathToField.concat('value'), input.value)
}

module.exports = updateValue
