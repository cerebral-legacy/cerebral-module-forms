var isRequired = require('../utils/isRequired.js')
var validateHelper = require('../utils/validate.js')
var transformPathToArray = require('./../utils/transformPathToArray.js')

function validateForm (formPath) {
  function action (context) {
    var input = context.input
    var state = context.state
    var formPath = transformPathToArray(formPath || input.formPath)
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
  action.displayName = 'validateForm'

  return action
}

module.exports = validateForm
