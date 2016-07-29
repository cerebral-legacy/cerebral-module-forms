var validFormValidator = require('./validFormValidator')

module.exports = function (field) {
  if (validFormValidator(field)) {
    return null
  }
  return field
}
