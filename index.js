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

    module.state({});

    module.signals({
      fieldAdded: require('./signals/fieldAdded.js'),
      fieldRemoved: require('./signals/fieldRemoved.js'),
      formAdded: require('./signals/formAdded.js'),
      formRemoved: require('./signals/formRemoved.js'),
      reset: require('./signals/reset.js'),
      formValidated: require('./signals/formValidated.js')
    });

    module.signalsSync({
      fieldChanged: require('./signals/fieldChanged.js')
    });

  };
};
