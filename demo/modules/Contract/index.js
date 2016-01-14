import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';

export default (options = {}) => {
  return (module, controller) => {

    module.state(Form({
      name: {
        value: '',
        isRequired: true
      },
      agreed: {
        value: false,
        isRequired: true
      }
    }));

    module.signals({
      formSubmitted
    });

  };
}
