function isRequired(field) {
  return field.isRequired && !field.hasValue;
}

module.exports = isRequired;
