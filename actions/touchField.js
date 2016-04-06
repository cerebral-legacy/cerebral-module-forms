function touchField (arg) {
  var input = arg.input
  var state = arg.state

  var path = input.field.concat('isTouched')
  var isTouched = state.get(path)
  state.set(path, input.touched || isTouched || false)
}

module.exports = touchField
