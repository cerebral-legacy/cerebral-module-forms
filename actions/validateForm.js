var isRequired = require('../helpers/isRequired.js')
var validateHelper = require('../helpers/validate.js')
var transformPathToArray = require('./../helpers/transformPathToArray.js')

function validate (arg) {
  var input = arg.input
  var state = arg.state
  var formPath = transformPathToArray(input.formPath)
  var path = formPath.slice()
  var currentPathValue = state.get(path)

  var validateForm = function (path, form) {
    Object.keys(form).forEach(function (key) {
      if (Array.isArray(form[key])) {
        validateArray(path.concat(key), form[key])
      } else if ('value' in form[key]) {
        doValidation(path.concat(key), form, key)
      } else {
        validateForm(path.concat(key), form[key])
      }
    })
  }

  var validateArray = function (path, formArray) {
    formArray.forEach(function (form, index) {
      validateForm(path.concat(index), form)
    })
  }

  var doValidation = function (path, form, key) {
    var field = form[key]
    var result = validateHelper(form, field.value, field.validations)
    var isValid = result.isValid && !isRequired(field)

    state.merge(path, {
      isValid: isValid,
      errorMessage: isValid ? null : field.errorMessages[result.failedRuleIndex],
      isTouched: true
    })
  }

  validateForm(path, currentPathValue)
}

module.exports = validate
