var rules = require('./helpers/rules.js')
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
      fieldAdded: require('./chains/fieldAdded.js'),
      fieldRemoved: require('./chains/fieldRemoved.js'),
      fieldChanged: {chain: require('./chains/fieldChanged.js'), immediate: true},
      formAdded: require('./chains/formAdded.js'),
      formRemoved: require('./chains/formRemoved.js'),
      formValidated: require('./chains/formValidated.js'),
      reset: require('./chains/reset.js')
    })
  }
}
