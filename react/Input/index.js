var React = require('react');
var CerebralReact = require('cerebral-view-react');

module.exports = React.createClass({
  mixins: [CerebralReact.Mixin],
  getStatePaths: function () {
    return {
      value: this.props.field.concat('value')
    };
  },
  onChange: function (event) {
    var moduleName = this.modules['cerebral-module-forms'].name;
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: event.target.value,
      preventValidation: this.props.validate === false
    });
  },
  onBlur: function (event) {
    var moduleName = this.modules['cerebral-module-forms'].name;
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: event.target.value,
      touched: true
    });
  },
  render: function () {
    var passedProps = this.props;
    var props = Object.keys(passedProps).reduce(function (props, key) {
      props[key] = passedProps[key];
      return props;
    }, {});

    props.value = this.state.value;
    props.onChange = this.onChange;
    props.onBlur = this.onBlur;
    return React.createElement('input', props);
  }
});
