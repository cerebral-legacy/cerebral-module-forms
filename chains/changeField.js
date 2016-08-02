module.exports = [
  require('../factories/touchField.js')(),
  require('../actions/updateValue.js'),
  require('../factories/validateHasValue.js')(),
  require('../factories/validateField')()
]
