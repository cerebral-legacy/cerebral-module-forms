var hasValueHelper = require('../helpers/hasValue.js')
var transformPathToArray = require('./../helpers/transformPathToArray.js')

function hasValue (arg) {
  var input = arg.input
  var state = arg.state
  var pathToField = transformPathToArray(input.field)
  var path = pathToField.slice()
  var key = path.pop()
  var form = state.get(path)
  var field = form[key]

  state.set(pathToField.concat('hasValue'), hasValueHelper(form, field.value, field.isValue))
}

module.exports = hasValue
