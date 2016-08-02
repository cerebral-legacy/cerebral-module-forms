var getFormFields = require('./getFormFields')

module.exports = function isValidForm (form) {
  var formFields = getFormFields(form)
  return Object.keys(formFields).reduce(function (isValid, formFieldKey) {
    if (!isValid) {
      return false
    }

    return formFields[formFieldKey].isValid
  }, true)
}
