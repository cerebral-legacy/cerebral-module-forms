function transformPathToArray (path) {
  if (!Array.isArray(path)) {
    path = path.split('.')
  }
  return path
}

module.exports = transformPathToArray
