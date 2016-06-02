var transformPathToArray = require('./../helpers/transformPathToArray.js')

function removeField (arg) {
  var input = arg.input
  var state = arg.state
  var pathToField = transformPathToArray(input.fieldPath)
  state.unset(pathToField)
}

module.exports = removeField
