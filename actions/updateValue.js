var transformPathToArray = require('./../utils/transformPathToArray.js')

function updateValue (context) {
  var input = context.input
  var state = context.state
  var pathToField = transformPathToArray(input.field)
  state.set(pathToField.concat('value'), input.value)
}

module.exports = updateValue
