var getFormFields = require('./getFormFields')

module.exports = function isValidForm (form) {
  return getFormFields(form).reduce(function (isValid, field) {
    if (!isValid) {
      return false
    }

    return field.isValid
  }, true)
}
