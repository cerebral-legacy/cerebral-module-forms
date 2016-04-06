module.exports = function isValidForm (form) {
  var isValidObject = function (object) {
    return Object.keys(object).reduce(function (isValid, key) {
      if (!isValid) {
        return false
      }

      if (Array.isArray(object[key])) {
        return isValidArray(object[key])
      } else if ('value' in object[key]) {
        return object[key].isValidating
      } else {
        return isValidObject(object[key])
      }
    }, true)
  }

  var isValidArray = function (array) {
    return array.reduce(function (isValid, object) {
      if (!isValid) {
        return false
      }

      return isValidObject(object)
    }, true)
  }

  return isValidObject(form)
}
