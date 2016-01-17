import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';
import isValidatingForm from 'cerebral-module-forms/helpers/isValidatingForm';
import Input from 'cerebral-module-forms/react/Input';

@Cerebral({
  form: ['async']
})
class Form extends React.Component {
  renderUsernameMessage() {
    const {form: {username}} = this.props;

    if (username.isValidating) {
      return 'Checking...';
    }
    if (username.isValidated && username.isValid) {
      return 'Valid username!';
    }
    if (username.isValidated && !username.isValid) {
      return 'Not valid username!';
    }
  }
  render() {
    const {form, signals} = this.props;
    const isValid = isValidForm(form);
    const isValidating = isValidatingForm(form);

    return (
      <form>

        <div>
          <h4>Username (required)</h4>
          <small>Blur to lookup name, alternates validity</small><br/>
          <Input
            field={['async', 'username']}
            onBlur={() => signals.async.usernameInputBlurred()}
            disabled={form.username.isValidating}
            validate={false}/>
            {this.renderUsernameMessage()}
        </div>

        <br/><br/>
        <button disabled={!isValid || isValidating || !form.username.isValidated} onClick={(e) => {
          e.preventDefault();
          signals.async.formSubmitted();
        }}>Submit</button>

        <button disabled={isValidating} onClick={(e) => {
            e.preventDefault();
            signals.forms.reset({ formPath: ['async'] })
        }}>Reset</button>
      </form>
    );
  }
}

export default Form;
