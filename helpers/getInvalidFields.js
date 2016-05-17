var traverseAndCollectInvalidFields = require('./traverseAndCollectInvalidFields')
var getFieldIfNotValidValidator = require('./getFieldIfNotValidValidator')

module.exports = function getInvalidFields (form) {
  return traverseAndCollectInvalidFields(form, getFieldIfNotValidValidator)
}
