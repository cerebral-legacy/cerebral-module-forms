var configureField = require('../helpers/configureField');

module.exports = function reset(arg) {
  var input = arg.input;
  var state = arg.state;

  var path = input.formPath.slice();
  var currentPathValue = state.get(path);

  var resetObject = function(form) {
    return Object.keys(form).reduce(function (newForm, key) {
      if (Array.isArray(form[key])) {
        newForm[key] = resetArray(form[key]);
      } else if ('value' in form[key]) {
        var newField = Object.keys(form[key]).reduce(function(newField, fKey) {
          newField[fKey] = form[key][fKey];
          return newField;
        }, {});
        newField.value = newField.defaultValue;
        newForm[key] = configureField(form, newField);
      } else {
        newForm[key] = resetObject(form[key]);
      }

      return newForm;
    }, {});
  }

  var resetArray = function(formArray) {
    return formArray.reduce(function(newFormArray, form, index) {
      newFormArray[index] = resetObject(form);
      return newFormArray;
    }, []);
  }

  state.set(path, resetObject(currentPathValue));
}
