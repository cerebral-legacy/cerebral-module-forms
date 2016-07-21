var rules = require('./rules.js')

module.exports = function (form, value, validations) {
  var initialValidation = {
    isValid: true,
    failedRuleIndex: null
  }

  if (!validations) {
    return initialValidation
  }

  if (Array.isArray(validations)) {
    return validations.reduce(function (result, validation, index) {
      if (!result.isValid) {
        return result
      }

      // Convert string to object form
      if (typeof validation === 'string') {
        var args = validation.split(/:(.+)?/)

        validation = {}
        if (args[1]) {
          try {
            validation[args[0]] = JSON.parse(args[1])
          } catch (e) {
            validation[args[0]] = args[1]
          }
        } else {
          validation[args[0]] = undefined
        }
      }

      return {
        isValid: Object.keys(validation).reduce(function (isValid, key) {
          if (!isValid) {
            return false
          }

          var rule = rules[key] || function () {
            console.warn('Rule ' + key + ' is not found')
          }

          return rule(value, form, validation[key])
        }, true),
        failedRuleIndex: index
      }
    }, initialValidation)
  }
}
