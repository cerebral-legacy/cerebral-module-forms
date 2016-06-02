var transformPathToArray = require('./../helpers/transformPathToArray.js')

function touchField (arg) {
  var input = arg.input
  var state = arg.state
  var pathToField = transformPathToArray(input.field)
  var path = pathToField.concat('isTouched')
  var isTouched = state.get(path)
  state.set(path, input.touched || isTouched || false)
}

module.exports = touchField
