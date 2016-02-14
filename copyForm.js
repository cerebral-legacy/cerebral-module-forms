var getCompiler = require('cerebral-url-scheme-compiler/get');
var setCompiler = require('cerebral-url-scheme-compiler/set');
var toJSON = require('./helpers/toJSON');

function copyFormFactory(formPath, outputPath) {

  var getValue = getCompiler(formPath);
  var setValue = setCompiler(outputPath);

  function copyForm(args) {

    var form = getValue(args);
    var fields = toJSON(form);
    setValue(args, fields);

  }

  return copyForm;

}

module.exports = copyFormFactory;
