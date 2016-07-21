var validateHelper = require('../helpers/validate.js')
var joinPath = require('../helpers/joinPath.js')
var transformPathToArray = require('./../helpers/transformPathToArray.js')

function validate (arg) {
  var input = arg.input
  var state = arg.state

  var doValidation = function (path, form, key) {
    var field = form[key]
    var result = validateHelper(form, field.value, field.validations)
    state.merge(path.concat(key), {
      isValid: result.isValid,
      errorMessage: result.isValid ? null : field.errorMessages[result.failedRuleIndex]
    })
  }

  var pathToField = transformPathToArray(input.field)
  var path = pathToField.slice()
  var key = path.pop()
  var form = state.get(path)
  var field = form[key]

  doValidation(path, form, key)

  if (Array.isArray(field.dependents) && field.dependents.length) {
    console.warn('DEPRECATED: Use new field.dependsOn API instead');
    field.dependents.forEach(function (dependent) {
      if (!Array.isArray(dependent) || !dependent.length) {
        console.warn('cerebral-module-forms: dependent path expected to be Array. Check out dependents provided for ' + input.field + '.')
        return
      }
      var path = joinPath(pathToField, dependent)
      var key = path.pop()
      var form = state.get(path)

      doValidation(path, form, key)
    })
  }

  if (Array.isArray(field.dependsOn)) {
    field.dependsOn.forEach(function (stringPath) {
      var path = stringPath.split('.')
      var key = path.pop()
      var form = state.get(path)

      doValidation(path, form, key)
    })
  } else if (field.dependsOn) {
    var path = field.dependsOn.split('.')
    var key = path.pop()
    var form = state.get(path)

    doValidation(path, form, key)
  }
}

module.exports = validate
