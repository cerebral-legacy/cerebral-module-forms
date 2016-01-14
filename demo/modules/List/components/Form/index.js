import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';
import Input from 'cerebral-module-forms/react/Input';

@Cerebral({
  form: ['list']
})
class Form extends React.Component {
  onAdd(event) {
    event.preventDefault();
    this.props.signals.forms.formAdded({
      formPath: ['list', 'items'],
      formDetails: {
        name: {
          value: '',
          isRequired: true
        },
        email: {
          value: '',
          validations: ['isEmail'],
          errorMessages: ['Invalid email'],
          isRequired: true
        }
      }
    });
  }
  renderItem(item, index) {
    const {form, signals} = this.props;
    const ItemStyle = {

    }
    return (
      <div style={ItemStyle} key={index}>
        <h5>Name (required)</h5>
        <Input field={['list', 'items', index, 'name']}/>
        <br/><br/>
        <h5>Email (required)</h5>
        <Input field={['list', 'items', index, 'email']}/>
        {form.items[index].email.isTouched ? form.items[index].email.errorMessage : null}
        <br/><br/>
        <button onClick={(e) => {
          e.preventDefault();
          signals.forms.formRemoved({
            formPath: ['list', 'items', index]
          });
        }}>Remove</button>
      </div>
    );
  }
  render() {
    const {signals, form} = this.props;
    const isValid = isValidForm(form);

    return (
      <form>
        <div>
          <h4>List name (required)</h4>
          <Input field={['list', 'name']}/>
        </div>

        <div>
          <h4>List</h4>
          <button onClick={(event) => this.onAdd(event)}>Add</button>
          <br/><br/>
          {form.items.map((item, index) => this.renderItem(item, index))}
        </div>

        <br/><br/>

        <button disabled={!isValid} onClick={(e) => {
          e.preventDefault();
          signals.list.formSubmitted();
        }}>Click to see JSON</button>

      </form>
    );
  }
}

export default Form;
