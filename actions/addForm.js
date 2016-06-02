var Form = require('../Form.js')
var transformPathToArray = require('./../helpers/transformPathToArray.js')

function addForm (arg) {
  var input = arg.input
  var state = arg.state
  var pathToForm = transformPathToArray(input.formPath)
  var path = pathToForm.slice()
  var currentPathValue = state.get(path)

  if (Array.isArray(currentPathValue)) {
    state.push(path, Form(input.formDetails))
  } else {
    state.set(path, Form(input.formDetails))
  }
}

module.exports = addForm
