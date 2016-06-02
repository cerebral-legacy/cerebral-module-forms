var React = require('react')
var CerebralReact = require('cerebral-view-react')
var transformPathToArray = require('../../helpers/transformPathToArray')

function parseValue (event) {
  if (event.target.multiple) {
    return [].reduce.call(event.target.options, function (value, option) {
      if (option.selected) {
        value.push(option.value)
      }

      return value
    }, [])
  } else if (event.target.type === 'checkbox') {
    return !!event.target.checked
  }

  return event.target.value
}

module.exports = function (Component) {
  return React.createClass({
    displayName: Component.name + 'FormContainer',
    mixins: [CerebralReact.Mixin],
    getStatePaths: function () {
      return {
        field: transformPathToArray(this.props.field)
      }
    },
    onChange: function (event) {
      if (this.props.onChange) {
        this.props.onChange(event)
      }

      var moduleName = this.modules['cerebral-module-forms'].name
      this.signals[moduleName].fieldChanged({
        field: this.props.field,
        value: parseValue(event),
        preventValidation: this.props.validate === false
      })
    },
    onBlur: function (event) {
      if (this.props.onChange) {
        this.props.onChange(event)
      }

      var moduleName = this.modules['cerebral-module-forms'].name
      this.signals[moduleName].fieldChanged({
        field: this.props.field,
        value: parseValue(event),
        touched: true
      })
    },
    render: function () {
      var passedProps = this.props
      var props = Object.keys(passedProps).reduce(function (props, key) {
        props[key] = passedProps[key]
        return props
      }, {})

      // Pass field state as component props
      var state = this.state
      props = Object.keys(state.field).reduce(function (props, key) {
        props[key] = state.field[key]
        return props
      }, props)

      props.onChange = this.onChange
      props.onBlur = this.onBlur
      return React.createElement(Component, props)
    }
  })
}
