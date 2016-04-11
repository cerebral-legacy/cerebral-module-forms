var traverseForm = function (object, validator) {
  return Object.keys(object).reduce(function (isValid, key) {
    if (!isValid) {
      return false
    }

    if (Array.isArray(object[key])) {
      return isValidArray(object[key], validator)
    } else if ('value' in object[key]) {
      return validator(object[key])
    } else {
      return traverseForm(object[key], validator)
    }
  }, true)
}

var isValidArray = function (array, validator) {
  return array.reduce(function (isValid, object) {
    if (!isValid) {
      return false
    }

    return traverseForm(object, validator)
  }, true)
}

module.exports = traverseForm
