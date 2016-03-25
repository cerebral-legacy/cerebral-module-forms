var React = require('react');
var CerebralReact = require('cerebral-view-react');

module.exports = React.createClass({
  mixins: [CerebralReact.Mixin],
  getStatePaths: function () {
    return {
      checked: this.props.field.concat('value')
    };
  },
  onChange: function (event) {
    var moduleName = this.modules['cerebral-module-forms'].name;
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: event.target.checked,

    })
  },
  onBlur: function (event) {
    var moduleName = this.modules['cerebral-module-forms'].name;
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: event.target.checked,
      touched: true
    })
  },
  render: function () {
    var passedProps = this.props;
    var props = Object.keys(passedProps).reduce(function (props, key) {
      props[key] = passedProps[key];
      return props;
    }, {});

    props.checked = this.state.checked;
    props.onChange = this.onChange;
    props.onBlur = this.onBlur;
    props.type = 'checkbox';
    return React.createElement('input', props);
  }
});
