var getInvalidFieldsHelper = require('../helpers/getInvalidFields')

module.exports = {
  setUp: function (callback) {
    this.form = {
      form1: {
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
        },
        address: {
          zipcode: {
            value: '',
            isRequired: true,
            isValid: false
          }
        },
        items: [
          {
            test: {
              value: '',
              isRequired: true,
              isValid: false
            }
          }
        ]
      }
    }

    callback()
  },
  tearDown: function (callback) {
    callback()
  },
  testValidateNestedForm: function (test) {
    var fields = getInvalidFieldsHelper(this.form)
    test.equal(fields.length, 3)
    test.equal(fields[0].path, 'form1.name')
    test.equal(fields[1].path, 'form1.address.zipcode')
    test.equal(fields[2].path, 'form1.items.0.test')
    test.done()
  }
}
