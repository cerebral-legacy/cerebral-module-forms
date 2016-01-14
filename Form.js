var configureField = require('./helpers/configureField.js');

module.exports = function (formData) {

  return Object.keys(formData).reduce(function (form, key) {
    form[key] = configureField(formData, formData[key]);
    return form;
  }, {});

};
