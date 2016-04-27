var getPath = function (parentPath, key) {
  var path = key
  if (parentPath) {
    path = parentPath.concat('.').concat(key)
  }
  return path
}

var traverseAndCollectInvalidFields = function (object, validator, errorHolder, parentPath) {
  return Object.keys(object).reduce(function (array, key) {
    var path = getPath(parentPath, key)
    if ('value' in object[key]) {
      var field = validator(object[key])
      if (field) {
        array.push({path: path, field: field})
      }
      return array
    } else {
      return traverseAndCollectInvalidFields(object[key], validator, array, path)
    }
  }, errorHolder || [])
}

module.exports = traverseAndCollectInvalidFields
