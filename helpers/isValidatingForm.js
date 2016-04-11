var traverseForm = require('./traverseForm')
var validatingFormValidator = require('./validatingFormValidator')

module.exports = function isValidForm (form) {
  return traverseForm(form, validatingFormValidator)
}
