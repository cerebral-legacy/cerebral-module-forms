var getFormFields = require('./getFormFields')

module.exports = function getInvalidFields (form) {
  var formFields = getFormFields(form)

  return Object.keys(formFields)
    .filter(function (key) {
      return !formFields[key].isValid
    })
    .reduce(function (invalidFields, key) {
      invalidFields[key] = formFields[key]
      return invalidFields
    }, {})
}
