function removeField(arg) {
  var input = arg.input;
  var state = arg.state;

  state.unset(input.fieldPath);

}

module.exports = removeField;
