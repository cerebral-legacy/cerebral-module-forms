var React = require('react');
var CerebralReact = require('cerebral-view-react');

module.exports = React.createClass({
  mixins: [CerebralReact.Mixin],
  getStatePaths: function () {
    return {
      value: this.props.field.concat('value'),
      options: this.props.field.concat('options')
    };
  },
  onChange: function (event) {
    var moduleName = this.modules['cerebral-module-forms'].name;
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: event.target.value
    })
  },
  render: function () {
    var passedProps = this.props;
    var props = Object.keys(passedProps).reduce(function (props, key) {
      props[key] = passedProps[key];
      return props;
    }, {});

    props.value = this.state.value;
    props.onChange = this.onChange;
    return React.createElement('select', props, this.state.options.map(function (option, index) {
      return React.createElement('option', {
        key: index
      }, option.text);
    }));
  }
});
