var rules = require('./rules.js')

module.exports = function (form, value, isValueRules) {
  return isValueRules.reduce(function (isValue, key) {
    if (!isValue) {
      return false
    }
    return rules[key](value, form)
  }, true)
}
