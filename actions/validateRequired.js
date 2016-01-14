var isRequired = require('../helpers/isRequired.js');

function validateRequired(arg) {
  var input = arg.input;
  var state = arg.state;
  var path = input.field.slice();
  var field = state.get(path);

  state.merge(path, {
    isValid: input.preventValidation ? field.isValid : !isRequired(field),
    errorMessage: null
  });

}

module.exports = validateRequired;
