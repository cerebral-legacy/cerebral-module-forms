var rules = require('./rules.js');

module.exports = function (form, value, validations) {

  var initialValidation = {
    isValid: true,
    failedRuleIndex: null
  };

  if (!validations) {
    return initialValidation;
  }

  if (Array.isArray(validations)) {
    return validations.reduce(function (result, validation, index) {
      if (!result.isValid) {
        return result;
      }

      // Extract argument
      var arg;
      var rule = validation;
      if (typeof rule === 'string') {

        if (rule.indexOf(':') >= 0) {
          var args = rule.split(/:(.+)?/)
          rule = args[0];
          arg = args[1] ? JSON.parse(args[1]) : undefined;
        }

        return {
          isValid: rules[rule](value, form, arg),
          failedRuleIndex: index
        }

      } else {

        return {
          isValid: Object.keys(rule).reduce(function (isValid, key) {
            if (!isValid) {
              return false;
            }
            return rules[key](value, form, rule[key]);
          }, true),
          failedRuleIndex: index
        }

      }

    }, initialValidation);
  } else {

  }

}
