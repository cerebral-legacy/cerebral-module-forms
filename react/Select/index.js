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
    var value;
    if (event.target.multiple) {
      value = [].reduce.call(event.target.options, function (value, option) {
        if (option.selected) {
          value.push(option.value);
        }

        return value;
      }, []);
    } else {
      value = event.target.value;
    }
    this.signals[moduleName].fieldChanged({
      field: this.props.field,
      value: value
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
