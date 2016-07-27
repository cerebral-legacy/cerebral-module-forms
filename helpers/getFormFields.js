var traverseForm = function (object, currentPath) {
  currentPath = currentPath || []
  return Object.keys(object).reduce(function (allFields, key) {
    currentPath.push(key)
    if (Array.isArray(object[key])) {
      var result = allFields.concat(object[key].reduce(function (allFormItems, formItem, index) {
        currentPath.push(index)
        var result = allFormItems.concat(traverseForm(object[key][index], currentPath))
        currentPath.pop();
        return result
      }, []))
      currentPath.pop()
      return result
    } else if ('value' in object[key]) {
      var result = allFields.concat({
        path: currentPath.join('.'),
        field: object[key]
      })
      currentPath.pop()
      return result
    }
    var result = allFields.concat(traverseForm(object[key], currentPath))
    currentPath.pop()
    return result
  }, [])
}

module.exports = traverseForm
