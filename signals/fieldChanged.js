module.exports = [
  require('../actions/touchField.js'),
  require('../actions/updateValue.js'),
  require('../actions/hasValue.js'),
  require('../actions/validateRequired.js'),
  require('../actions/shouldValidate.js'), {
    yes: [require('../actions/validate.js')],
    no: []
  }
];
