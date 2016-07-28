var traverseForm = function (object, currentPath, allFields) {
  currentPath = currentPath || []
  allFields = allFields || {}

  return Object.keys(object).reduce(function (allFields, key) {
    currentPath.push(key)
    if (Array.isArray(object[key])) {
      object[key].forEach(function (formItem, index) {
        currentPath.push(index)
        traverseForm(object[key][index], currentPath, allFields)
        currentPath.pop();
      })
      currentPath.pop()
      return allFields
    } else if ('value' in object[key]) {
      allFields[currentPath.join('.')] = object[key]
      currentPath.pop()
      return allFields
    }
    traverseForm(object[key], currentPath, allFields)
    currentPath.pop()
    return allFields
  }, allFields)
}

module.exports = traverseForm
