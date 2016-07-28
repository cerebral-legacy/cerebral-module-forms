function shouldValidate(fieldPath) {
  function action (context) {
    var field = context.state.get(fieldPath || context.input.field)
    field.validations && field.hasValue ? context.output.true() : context.output.false()
  }
  action.displayName = 'shouldValidate'
  action.outputs = ['true', 'false']

  return action
}

module.exports = shouldValidate
