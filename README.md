# cerebral-module-forms
Form handling for Cerebral

### Try the demo
1. `cd demo`
2. `npm install`
3. `npm start`
4. Go to `localhost:3000`

### Register the module
```js
import Forms from 'cerebral-module-forms';

controller.addModules({
  forms: Forms({
    rules: {
      myCustomRule(value, form, arg) {
        value // Value of the field
        form // All values in field
        arg // Any argument passed to the rule
      }
    }
  })
})
```

### Add a form
```js
import Form from 'cerebral-module-forms/Form';

export default (options = {}) {
  return (module) => {

    module.addState({
      anyState: 'bar',
      myForm: Form({
        name: {
          value: ''
        }
      })
    });
    
  };
}
```

#### Namespacing
You can add a Form wherever you want.

```js
import Form from 'cerebral-module-forms/Form';

export default (options = {}) {
  return (module) => {

    module.addState({
      formA: Form({
        name: {
          value: ''
        },
        address: Form({
          street: {
            value: ''
          }
        })
      }),
      formB: Form({
        email: {
          value: ''
        }
      })
    });

  };
}
```

#### Validating
```js
import Form from 'cerebral-module-forms/Form';

export default (options = {}) {
  return (module) => {

    module.addState(Form({
      name: {
        value: '',
        isRequired: true // Form is not valid if value is empty
      },
      email: {
        value: '',

        // Point to validation name and set an
        // error message. Use ":" to pass an argument, which
        // is JSON parsed
        validations: ['isEmail', 'minLength:3'],
        errorMessages: ['Not valid email', 'Too short email']
      },
      email2: {
        value: '',
        isRequired: true,
        validations: [{
          isEmail: true
        }],
        errorMessages: ['Please enter a valid email address'],
        dependents: [
          ['..', 'email3'],
          //['checkout', 'customer', 'email3'] this could point to another form.
          //['.', '..', 'email3'] // Also works
        ]
      },
      email3: {
        value: '',
        isRequired: true,
        validations: ['equalsField:"email2"', 'isEmail'],
        errorMessages: ['Please enter the same email address as above',
                        'Please enter a valid email address']
      },
      postalCode: {
        value: '',
        validations: [{
          minLength: 4,
          maxLength: 6,
          isNumeric: true
        }],
        errorMessages: ['Not valid postalCode, have to be between 4-6']
      },

    });

  };
}
```

#### Validation rules
Check `helpers/rules.js`.


#### Defining when a value exists
To figure out if your field actually has a value the Forms module uses a generic check for it. If its undefined, empty string, null or false it considerns the field as "not having a value".
If you want to override this, you can. For example you want to create a list of items where
it is required to have three items.

```js
import Form from 'cerebral-module-forms/Form';

export default (options = {}) {
  return (module) => {

    module.addState(Form({
      myCustomField: {
        value: [],
        isValue: ['minLength:3']
      }
    });

  };
}
```


### Use a form
To use a form you grab it from tis state path. You use its value and you
update the value using a signal exposed from the Forms module. Its completely
generic how values are handled. No need to use default form elements, you can
easily create your own and get the validation for free.

```js
import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';

// A helper to check if the form is valid
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

@Cerebral({
  form: ['someForm']
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
              field: ['someForm', 'name'],
              value: e.target.value
            })}/>
        </div>

        <button disabled={!isValid} onClick={(e) => {
          e.preventDefault();
          signals.someForm.formSubmitted();
        }}>Click to see JSON</button>

      </form>
    );
  }
}

export default Form;
```

### Custom validation (async)
You have complete control of the state inside the state store, so you can basically build whatever you want. To prevent any
validation occuring, you can set:

```js
signals.forms.fieldChanged({
  field: ['someForm', 'name'],
  value: e.target.value,
  preventValidation: true
});
```

This will synchronize that value, but not do any validation. Then you are free to create some application specific signal that
will do whatever it needs and just update the `['someForm', 'name']` properties to whatever you want. Changing its validation state,
change some properties etc. Does not matter.

### Wrappers
Forms has a few wrappers for the native form elements. You just point to the field it should synchronize with, and everything else is
defined inside your state store.

```js
import Input from 'cerebral-module-forms/react/Input';
import Checkbox from 'cerebral-module-forms/react/Checkbox';
import Select from 'cerebral-module-forms/react/Select';

<Input field={['path', 'to', 'field']}/>

<Checkbox field={['path', 'to', 'field']}/>

<Select field={['path', 'to', 'field']}/>
```

The **select** component expects its field to have an array of options like:

```js
{
  value: 10,
  options: [{
    value: 10,
    text: 'Age 10'
  }, {
    value: 20,
    text: 'Age 20'
  }]
}
```

### Controlled Components
Since Cerebral is handling all state we expect the input to be controlled. 
See [https://facebook.github.io/react/docs/forms.html](https://facebook.github.io/react/docs/forms.html)
