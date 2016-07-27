var isRequired = require('../utils/isRequired.js')
var transformPathToArray = require('./../utils/transformPathToArray.js')

function validateRequired (fieldPath) {
  function action (context) {
    var input = context.input
    var state = context.state
    var pathToField = transformPathToArray(fieldPath || input.field)
    var path = pathToField.slice()
    var field = state.get(path)

    state.merge(path, {
      isValid: !isRequired(field),
      errorMessage: null
    })
  }
  action.displayName = 'validateRequired'

  return action
}

module.exports = validateRequired
