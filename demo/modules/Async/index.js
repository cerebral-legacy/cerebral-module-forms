import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';
import usernameInputBlurred from './signals/usernameInputBlurred';

export default (options = {}) => {
  return (module, controller) => {

    module.addState(Form({
      username: {
        value: '',
        isValidating: false,
        isValidated: false
      }
    }));

    module.addSignals({
      usernameInputBlurred,
      formSubmitted
    });

  };
}
