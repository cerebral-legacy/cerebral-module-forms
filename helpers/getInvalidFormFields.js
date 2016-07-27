var getFormFields = require('./getFormFields')

module.exports = function getInvalidFields (form) {
  return getFormFields(form).filter(function (formField) {
    return !formField.field.isValid
  })
}
