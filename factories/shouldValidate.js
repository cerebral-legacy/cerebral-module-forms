function shouldValidate(fieldPath) {
  function action (context) {
    var field = context.state.get(fieldPath || context.input.field)
    field.validations && field.hasValue ? context.output.yes() : context.output.no()
  }
  action.displayName = 'shouldValidate'
  action.outputs = ['yes', 'no']

  return action
}

module.exports = shouldValidate
