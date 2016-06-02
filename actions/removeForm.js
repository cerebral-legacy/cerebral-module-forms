var transformPathToArray = require('./../helpers/transformPathToArray.js')

function removeForm (arg) {
  var input = arg.input
  var state = arg.state
  var path = transformPathToArray(input.formPath).slice()
  var currentPathValue = state.get(path)
  var key = path.pop()

  if (Array.isArray(currentPathValue)) {
    state.splice(path, key, 1)
  } else {
    state.unset(path.concat(key))
  }
}

module.exports = removeForm
