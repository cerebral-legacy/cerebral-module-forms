var hasValueHelper = require('../utils/hasValue.js')
var transformPathToArray = require('./../utils/transformPathToArray.js')

function validateHasValue(fieldPath) {
  function action (context) {
    var input = context.input
    var state = context.state
    var pathToField = transformPathToArray(fieldPath || input.field)
    var path = pathToField.slice()
    var key = path.pop()
    var form = state.get(path)
    var field = form[key]

    state.set(pathToField.concat('hasValue'), hasValueHelper(form, field.value, field.isValue))
  }
  action.display = 'validateHasValue'

  return action
}

module.exports = validateHasValue
