function updateValue(arg) {
  var input = arg.input;
  var state = arg.state;
  state.set(input.field.concat('value'), input.value);
}

module.exports = updateValue;
