var isRequired = require('../helpers/isRequired.js')
var transformPathToArray = require('./../helpers/transformPathToArray.js')

function validateRequired (arg) {
  var input = arg.input
  var state = arg.state
  var pathToField = transformPathToArray(input.field)
  var path = pathToField.slice()
  var field = state.get(path)

  state.merge(path, {
    isValid: input.preventValidation ? field.isValid : !isRequired(field),
    errorMessage: null
  })
}

module.exports = validateRequired
