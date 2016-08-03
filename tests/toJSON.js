var toJSON = require('../helpers/toJSON')
var Form = require('../Form')

module.exports = {
  setUp: function (callback) {
    this.form = Form({
      name: {
        value: 'foo'
      },
      name2: {
        value: 'bar'
      }
    })
    callback()
  },
  tearDown: function (callback) {
    callback()
  },
  testToJSON: function (test) {
    this.form.name3 = null;
    test.deepEqual(toJSON(this.form), {
      name: 'foo',
      name2: 'bar'
    })
    test.done()
  }
}
