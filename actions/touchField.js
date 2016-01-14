function touchField(arg) {
  var input = arg.input;
  var state = arg.state;
  state.set(input.field.concat('isTouched'), true);
}

module.exports = touchField;
