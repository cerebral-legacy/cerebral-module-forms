var rules = require('./utils/rules.js')
var MODULE = 'cerebral-module-forms'

module.exports = function (options) {
  options = options || {}

  if (options.rules) {
    Object.keys(options.rules).forEach(function (key) {
      rules[key] = options.rules[key]
    })
  }

  return function (module, controller) {
    module.alias(MODULE)

    module.addSignals({
      fieldChanged: {chain: require('./chains/changeField.js'), immediate: true}
    })
  }
}
