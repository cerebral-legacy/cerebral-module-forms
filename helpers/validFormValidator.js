module.exports = function (field) {
  return field.isValid && (!field.isRequired || (field.isRequired && field.hasValue))
}
