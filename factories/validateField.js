var validateHelper = require('../utils/validate.js')
var joinPath = require('../utils/joinPath.js')
var transformPathToArray = require('./../utils/transformPathToArray.js')

function validateField (fieldPath) {
  function action (context) {
    var input = context.input
    var state = context.state

    var doValidation = function (path, form, key) {
      var field = form[key]
      var result = validateHelper(form, field.value, field.validations)
      state.merge(path.concat(key), {
        isValid: result.isValid,
        errorMessage: result.isValid ? null : field.errorMessages[result.failedRuleIndex]
      })
    }

    var pathToField = transformPathToArray(fieldPath || input.field)
    var path = pathToField.slice()
    var key = path.pop()
    var form = state.get(path)
    var field = form[key]

    doValidation(path, form, key)

    if (Array.isArray(field.dependsOn)) {
      field.dependsOn.forEach(function (stringPath) {
        var path = stringPath.split('.')
        var dependsOnKey = path.pop()
        var form = state.get(path)

        if (!form) {
          throw new Error('The path "' + path.join('.')  + '" used with "dependsOn" on field "' + key + '" is not correct, please check it')
        }

        doValidation(path, form, dependsOnKey)
      })
    } else if (field.dependsOn) {
      var path = field.dependsOn.split('.')
      var dependsOnKey = path.pop()
      var form = state.get(path)

      if (!form) {
        throw new Error('The path "' + path.join('.')  + '" used with "dependsOn" on field "' + key + '" is not correct, please check it')
      }

      doValidation(path, form, dependsOnKey)
    }
  }
  action.displayName = 'validateField'

  return action
}

module.exports = validateField
