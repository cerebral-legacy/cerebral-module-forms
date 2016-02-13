import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';

export default (options = {}) => {
  return (module, controller) => {

    module.addState(Form({
      name: {
        value: '',
        isRequired: true
      },
      items: []
    }));

    module.addSignals({
      formSubmitted
    });

  };
}
