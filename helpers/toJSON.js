function toJSON (form) {
  var extractObject = function (object) {
    return Object.keys(object).reduce(function (newObject, key) {
      if (Array.isArray(object[key])) {
        newObject[key] = extractArray(object[key])
      } else if ('value' in object[key]) {
        newObject[key] = object[key].value
      } else {
        newObject[key] = extractObject(object[key])
      }
      return newObject
    }, {})
  }

  var extractArray = function (array) {
    return array.map(function (object) {
      return extractObject(object)
    })
  }

  return extractObject(form)
}

module.exports = toJSON
