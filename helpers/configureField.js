var hasValueHelper = require('./hasValue.js');
var validate = require('./validate.js');
var isRequired = require('./isRequired.js');

function configureField(formData, field) {

  // If not an actual field, just a namespace
  if (!('value' in field)) {
    return field;
  }

  var isValue = field.isValue || ['isValue'];
  var value = field.value;
  var defaultValue = field.defaultValue || value;
  var validations = field.validations || null;
  var errorMessages = field.errorMessages || [];
  var hasValue = hasValueHelper(formData, value, isValue);
  var validationResult = validate(formData, value, validations);

  field.value = value;
  field.defaultValue = defaultValue;
  field.validations = validations;
  field.isValid = validationResult.isValid;
  field.errorMessages = errorMessages
  field.errorMessage = validationResult.isValid ? null : errorMessages[validationResult.failedRule];
  field.isValue = isValue;
  field.hasValue = hasValue;
  field.isTouched = hasValue;

  return field;

}

module.exports = configureField;
