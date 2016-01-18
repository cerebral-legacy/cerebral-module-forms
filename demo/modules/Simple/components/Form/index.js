import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

@Cerebral({
  form: ['simple']
})
class Form extends React.Component {
  render() {
    const {signals, form} = this.props;
    const isValid = isValidForm(form);

    return (
      <form>
        <div>
          <h4>Name (required)</h4>
          <input
            value={form.name.value}
            onChange={(e) => signals.forms.fieldChanged({
              field: ['simple', 'name'],
              value: e.target.value
            })}/>
        </div>

        <div>
          <h4>Email (required)</h4>
          <input
            value={form.email.value}
            onChange={(e) => signals.forms.fieldChanged({
              field: ['simple', 'email'],
              value: e.target.value
            })}/>
          {form.email.isTouched ? form.email.errorMessage : null}
        </div>

        <div>
          <h4>Address</h4>
          <div>
            <h5>Street</h5>
            <input
              value={form.address.street.value}
              onChange={(e) => signals.forms.fieldChanged({
                field: ['simple', 'address', 'street'],
                value: e.target.value
              })}/>
            {form.address.street.isTouched ? form.address.street.errorMessage : null}
          </div>
          <div>
            <h5>PostalCode</h5>
            <input
              value={form.address.postalCode.value}
              onChange={(e) => signals.forms.fieldChanged({
                field: ['simple', 'address', 'postalCode'],
                value: e.target.value
              })}/>
            {form.address.postalCode.isTouched ? form.address.postalCode.errorMessage : null}
          </div>
        </div>

        <br/><br/>

        <button disabled={!isValid} onClick={(e) => {
          e.preventDefault();
          signals.simple.formSubmitted();
        }}>Click to see JSON</button>

        <button onClick={(e) => {
            e.preventDefault();
            signals.forms.reset({ formPath: ['simple'] })
        }}>Reset</button>

        <button onClick={(e) => {
            e.preventDefault();
            signals.forms.formValidated({ formPath: ['simple'] })
        }}>Validate</button>

      </form>
    );
  }
}

export default Form;
