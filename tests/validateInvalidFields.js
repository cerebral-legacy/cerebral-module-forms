var getInvalidFieldsHelper = require('../helpers/getInvalidFormFields')

module.exports = {
  setUp: function (callback) {
    this.form = {
      name: {
        value: [],
        isRequired: true,
        isValid: false
      },
      name2: {
        value: [
          {}, {}, {}
        ],
        isRequired: true,
        isValid: true,
        hasValue: []
      }
    }
    callback()
  },
  tearDown: function (callback) {
    callback()
  },
  testValidateInvalidFields: function (test) {
    var fields = getInvalidFieldsHelper(this.form)
    test.equal(Object.keys(fields).length, 1)
    test.ok(fields.name)
    test.done()
  }
}
