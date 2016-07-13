import React from 'react'
import {connect} from 'cerebral-view-react'
import isValidForm from 'cerebral-module-forms/helpers/isValidForm'
import isValidatingForm from 'cerebral-module-forms/helpers/isValidatingForm'

export default connect({
  form: 'async'
},
class Form extends React.Component {
  renderUsernameMessage () {
    const {form: {username}} = this.props

    if (username.isValidating) {
      return 'Checking...'
    }
    if (username.isValidated && username.isValid) {
      return 'Valid username!'
    }
    if (username.isValidated && !username.isValid) {
      return 'Not valid username!'
    }
  }
  render () {
    const {form, signals} = this.props
    const isValid = isValidForm(form)
    const isValidating = isValidatingForm(form)

    return (
      <form>

        <div>
          <h4>Username (required)</h4>
          <small>Blur to lookup name, alternates validity</small><br/>
          <input
            value={form.username.value}
            onChange={(e) => signals.forms.fieldChanged({
              field: 'async.username',
              value: e.target.value,
              preventValidation: true,
              touched: true
            })}
            onBlur={(e) => signals.async.usernameInputBlurred()}/>
        </div>
        {this.renderUsernameMessage()}
        <br/><br/>
        <button disabled={!isValid || isValidating || !form.username.isValidated} onClick={(e) => {
          e.preventDefault()
          signals.async.formSubmitted()
        }}>Submit</button>

        <button disabled={isValidating} onClick={(e) => {
          e.preventDefault()
          signals.forms.reset({formPath: 'async'})
        }}>Reset</button>

        <button disabled={isValidating} onClick={(e) => {
          e.preventDefault()
          signals.forms.formValidated({formPath: 'async'})
        }}>Validate</button>

      </form>
    )
  }
})
