import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';
import usernameInputBlurred from './signals/usernameInputBlurred';

export default (options = {}) => {
  return (module, controller) => {

    module.state(Form({
      username: {
        value: '',
        isValidating: false,
        isValidated: false
      }
    }));

    module.signals({
      usernameInputBlurred,
      formSubmitted
    });

  };
}
