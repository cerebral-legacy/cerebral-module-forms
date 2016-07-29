var getFormFields = require('./getFormFields')

module.exports = function isValidForm (form) {
  return getFormFields(form).reduce(function (isValid, formField) {
    if (!isValid) {
      return false
    }

    return formField.field.isValid
  }, true)
}
