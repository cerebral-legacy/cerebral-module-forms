var hasValueHelper = require('../helpers/hasValue.js')

function hasValue (arg) {
  var input = arg.input
  var state = arg.state

  var path = input.field.slice()
  var key = path.pop()
  var form = state.get(path)
  var field = form[key]

  state.set(input.field.concat('hasValue'), hasValueHelper(form, field.value, field.isValue))
}

module.exports = hasValue
