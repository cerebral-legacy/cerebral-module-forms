function shouldValidate (arg) {
  var field = arg.state.get(arg.input.field)
  !arg.input.preventValidation && field.validations && field.hasValue ? arg.output.yes() : arg.output.no()
}

shouldValidate.outputs = ['yes', 'no']

module.exports = shouldValidate
