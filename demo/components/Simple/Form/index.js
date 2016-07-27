import React from 'react'
import {connect} from 'cerebral-view-react'
import isValidForm from 'cerebral-module-forms/helpers/isValidForm'

export default connect({
  form: 'simple'
},
class Form extends React.Component {
  render () {
    const {signals, form} = this.props
    const isValid = isValidForm(form)

    return (
      <form>
        <div>
          <h4>Name (required)</h4>
          <input
            value={form.name.value}
            onChange={(e) => signals.forms.fieldChanged({
              field: 'simple.name',
              value: e.target.value
            })}
            onBlur={(e) => signals.forms.fieldChanged({
              field: 'simple.name',
              value: e.target.value,
              touched: true
            })}/>
        </div>

        <div>
          <h4>Email (required and validate on blur)</h4>
          <input
            value={form.email.value}
            onChange={(e) => signals.forms.fieldChanged({
              field: 'simple.email',
              value: e.target.value
            })}
            onBlur={(e) => signals.forms.fieldChanged({
              field: 'simple.email',
              value: e.target.value,
              touched: true
            })}/>
          {form.email.isTouched ? form.email.errorMessage : null}
        </div>

        <div>
          <h4>Password (required)</h4>
          <input
            value={form.email.password}
            onChange={(e) => signals.forms.fieldChanged({
              field: 'simple.password',
              value: e.target.value
            })}
            onBlur={(e) => signals.forms.fieldChanged({
              field: 'simple.password',
              value: e.target.value,
              touched: true
            })}/>
          {form.email.isTouched ? form.password.errorMessage : null}
        </div>

        <div>
          <h4>Repeat password (required)</h4>
          <input
            type="password"
            value={form.email.repeatPassword}
            onChange={(e) => signals.forms.fieldChanged({
              field: 'simple.repeatPassword',
              value: e.target.value
            })}
            onBlur={(e) => signals.forms.fieldChanged({
              field: 'simple.repeatPassword',
              value: e.target.value,
              touched: true
            })}/>
          {form.email.isTouched ? form.repeatPassword.errorMessage : null}
        </div>

        <div>
          <h4>Address</h4>
          <div>
            <h5>Street</h5>
            <input
              value={form.address.street.value}
              onChange={(e) => signals.forms.fieldChanged({
                field: 'simple.address.street',
                value: e.target.value
              })}
              onBlur={(e) => signals.forms.fieldChanged({
                field: 'simple.address.street',
                value: e.target.value,
                touched: true
              })}/>
            {form.address.street.isTouched ? form.address.street.errorMessage : null}
          </div>
          <div>
            <h5>PostalCode</h5>
            <input
              value={form.address.postalCode.value}
              onChange={(e) => signals.forms.fieldChanged({
                field: 'simple.address.postalCode',
                value: e.target.value
              })}
              onBlur={(e) => signals.forms.fieldChanged({
                field: 'simple.address.postalCode',
                value: e.target.value,
                touched: true
              })}/>
            {form.address.postalCode.isTouched ? form.address.postalCode.errorMessage : null}
          </div>
        </div>

        <br/><br/>

        <button disabled={!isValid} onClick={(e) => {
          e.preventDefault()
          signals.simple.formSubmitted()
        }}>Click to see JSON</button>

        <button onClick={(e) => {
          e.preventDefault()
          signals.simple.resetClicked()
        }}>Reset</button>

        <button onClick={(e) => {
          e.preventDefault()
          signals.simple.validateFormClicked()
        }}>Validate</button>

      </form>
    )
  }
})
