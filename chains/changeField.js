module.exports = [
  require('../factories/touchField.js')(),
  require('../actions/updateValue.js'),
  require('../factories/validateHasValue.js')(),
  require('../factories/validateRequired.js')(),
  require('../factories/shouldValidate.js')(), {
    yes: [require('../factories/validateField')()],
    no: []
  }
]
