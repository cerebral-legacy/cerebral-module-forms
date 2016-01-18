var validateHelper = require('../helpers/validate.js');

function validate(arg) {
  var input = arg.input;
  var state = arg.state;

  var path = input.field.slice();
  var key = path.pop();
  var form = state.get(path);
  var field = form[key];

  var validationResult = validateHelper(form, field.value, field.validations);
  state.merge(path.concat(key), {
    isValid: validationResult.isValid,
    errorMessage: validationResult.isValid ? null : field.errorMessages[validationResult.failedRuleIndex]
  });
}

module.exports = validate;
