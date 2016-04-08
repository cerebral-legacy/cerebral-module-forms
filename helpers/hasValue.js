var rules = require('./rules.js')

function parseKey(value) {
  if (typeof value === 'string') {
    var args = value.split(/:(.+)?/)
    return  args[1] ? {key: args[0], params: JSON.parse(args[1])} : {key: value}
  }
  return {key:value}
}

module.exports = function (form, value, isValueRules) {
  return isValueRules.reduce(function (isValue, key) {
    if (!isValue) {
      return false
    }
    var parsedKey = parseKey(key)
    return rules[parsedKey.key](value, form, parsedKey.params)
  }, true)
}
