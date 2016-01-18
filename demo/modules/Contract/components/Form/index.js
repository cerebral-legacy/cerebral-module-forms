import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';
import Input from 'cerebral-module-forms/react/Input';
import Checkbox from 'cerebral-module-forms/react/Checkbox';

@Cerebral({
  form: ['contract']
})
class Form extends React.Component {
  render() {
    const {signals, form} = this.props;
    const isValid = isValidForm(form);

    return (
      <form>
        <div>
          <h4>Name (required)</h4>
          <Input field={['contract', 'name']}/>
        </div>

        <div>
          <h4>An awesome contract</h4>
          <p>
            Whatup with this kick ass awesome contract ya'll?
          </p>
        </div>

        <div>
          <h4>Agreed (require)</h4>
          <Checkbox field={['contract', 'agreed']}/>
        </div>

        <br/><br/>

        <button disabled={!isValid} onClick={(e) => {
          e.preventDefault();
          signals.contract.formSubmitted();
        }}>Click to see JSON</button>

        <button onClick={(e) => {
            e.preventDefault();
            signals.forms.reset({ formPath: ['contract'] })
        }}>Reset</button>

        <button onClick={(e) => {
            e.preventDefault();
            signals.forms.formValidated({ formPath: ['contract'] })
        }}>Validate</button>

      </form>
    );
  }
}

export default Form;
