var hasValueHelper = require('../utils/hasValue')
var Form = require('../Form')

module.exports = {
  setUp: function (callback) {
    this.form = Form({
      name: {
        value: [],
        isValue: ['minLength:3']
      },
      name2: {
        value: [
          {}, {}, {}
        ],
        isValue: ['minLength:3']
      }
    })
    callback()
  },
  tearDown: function (callback) {
    callback()
  },
  testIsValueWithParams: function (test) {
    var field = this.form['name']
    var rule = hasValueHelper(this.form, field.value, field.isValue)
    test.equals(rule, false)
    field = this.form['name2']
    rule = hasValueHelper(this.form, field.value, field.isValue)
    test.equals(rule, true)
    test.done()
  }
}
