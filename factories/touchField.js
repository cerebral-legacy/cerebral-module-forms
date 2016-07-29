var transformPathToArray = require('./../utils/transformPathToArray.js')

function touchField (fieldPath, isTouched) {
  function action (context) {
    var input = context.input
    var state = context.state
    var pathToField = transformPathToArray(fieldPath || input.field)
    var path = pathToField.concat('isTouched')
    isTouched = isTouched || state.get(path)
    state.set(path, input.touched || isTouched || false)
  }
  action.displayName = 'touchField'

  return action
}


module.exports = touchField
