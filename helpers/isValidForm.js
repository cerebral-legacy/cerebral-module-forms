var traverseForm = require('./traverseForm')
var validFormValidator = require('./validFormValidator')

module.exports = function isValidForm (form) {
  return traverseForm(form, validFormValidator)
}
