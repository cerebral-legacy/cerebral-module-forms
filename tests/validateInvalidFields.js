var getInvalidFieldsHelper = require('../helpers/getInvalidFields')

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
    test.equal(fields.length, 1)
    test.equal(fields[0].path, 'name')
    test.done()
  }
}
