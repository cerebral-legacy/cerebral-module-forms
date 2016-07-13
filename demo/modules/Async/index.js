import Form from 'cerebral-module-forms/Form'
import formSubmitted from './chains/formSubmitted'
import usernameInputBlurred from './chains/usernameInputBlurred'

export default (options = {}) => {
  return (module, controller) => {
    module.addState(Form({
      username: {
        value: '',
        isValidating: false,
        isValidated: false
      }
    }))

    module.addSignals({
      usernameInputBlurred,
      formSubmitted
    })
  }
}
