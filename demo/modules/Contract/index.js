import Form from 'cerebral-module-forms/Form'
import formSubmitted from './chains/formSubmitted'

export default (options = {}) => {
  return (module, controller) => {
    module.addState(Form({
      name: {
        value: '',
        isRequired: true
      },
      agreed: {
        value: false,
        isRequired: true
      }
    }))

    module.addSignals({
      formSubmitted
    })
  }
}
