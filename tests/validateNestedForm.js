var getInvalidFieldsHelper = require('../helpers/getInvalidFormFields')

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
    test.equal(Object.keys(fields).length, 3)
    test.ok(fields['form1.name'])
    test.ok(fields['form1.address.zipcode'])
    test.ok(fields['form1.items.0.test'])
    test.done()
  }
}
