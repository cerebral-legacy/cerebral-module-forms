var validateHelper = require('../helpers/validate.js');
var joinPath = require('../helpers/joinPath.js');

function validate(arg) {
  var input = arg.input;
  var state = arg.state;

  var doValidation = function(path, form, key) {
    var field = form[key];
    var result = validateHelper(form, field.value, field.validations);
    state.merge(path.concat(key), {
      isValid: result.isValid,
      errorMessage: result.isValid ? null : field.errorMessages[result.failedRuleIndex]
    });
  }

  var path = input.field.slice();
  var key = path.pop();
  var form = state.get(path);
  var field = form[key];

  doValidation(path, form, key);

  if (Array.isArray(field.dependents) && field.dependents.length) {
    field.dependents.forEach(function(dependent) {
      if (! Array.isArray(dependent) || !dependent.length) {
   	    console.warn('cerebral-module-forms: dependent path expected to be Array. Check out dependents provided for ' + input.field + '.');
   	    return;
      }
      var path = joinPath(input.field, dependent);
      var key = path.pop();
      var form = state.get(path);

      doValidation(path, form, key);
    });
  }
}

module.exports = validate;
