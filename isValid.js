var isValid = require('./helpers/isValid');

function isValidComputed(path) {
  path = typeof path === 'string' ? path.split('.') : path;

  function computed(get) {
    return isValid(get(path));
  }
  computed.computedRef = JSON.stringify(path);

  return computed;
}

module.exports = isValidComputed;
