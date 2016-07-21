import Form from 'cerebral-module-forms/Form'
import formSubmitted from './chains/formSubmitted'

export default (options = {}) => {
  return (module, controller) => {
    module.addState(Form({
      name: {
        value: '',
        isRequired: true
      },
      email: {
        value: '',
        validations: ['isEmail'],
        errorMessages: ['Not valid email'],
        isRequired: true
      },
      password: {
        value: '',
        validations: ['equalsField:repeatPassword'],
        dependsOn: 'simple.repeatPassword',
        errorMessages: ['Not equal to repeated password'],
        isRequired: true
      },
      repeatPassword: {
        value: '',
        validations: ['equalsField:password'],
        dependsOn: 'simple.password',
        errorMessages: ['Not equal to password'],
        isRequired: true
      },
      address: Form({
        street: {
          value: ''
        },
        postalCode: {
          value: '',
          validations: ['isLength:4', 'isNumeric'],
          errorMessages: ['Has to be length 4', 'Can only contain numbers']
        }
      })
    }))

    module.addSignals({
      formSubmitted
    })
  }
}
