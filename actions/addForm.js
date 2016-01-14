var Form = require('../Form.js');

function addForm(arg) {
  var input = arg.input;
  var state = arg.state;
  var output = arg.output;
  var path = input.formPath.slice();
  var currentPathValue = state.get(path);

  if (Array.isArray(currentPathValue)) {
    state.push(path, Form(input.formDetails));
  } else {
    state.set(path, Form(input.formDetails));
  }
}

module.exports = addForm;
