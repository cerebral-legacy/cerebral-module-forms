var rules = require('./helpers/rules.js');

module.exports = function (options) {

  options = options || {};

  if (options.rules) {
    Object.keys(options.rules).forEach(function (key) {
      rules[key] = options.rules[key];
    });
  }

  return function (module, controller) {

    module.alias('cerebral-module-forms');

    module.addState({});

    module.addSignals({
      fieldAdded: require('./signals/fieldAdded.js'),
      fieldRemoved: require('./signals/fieldRemoved.js'),
      fieldChanged: {chain: require('./signals/fieldChanged.js'), sync: true},
      formAdded: require('./signals/formAdded.js'),
      formRemoved: require('./signals/formRemoved.js'),
      formValidated: require('./signals/formValidated.js'),
      reset: require('./signals/reset.js')
    });
  };
};
