import isValidForm from 'cerebral-module-forms/helpers/isValidForm'

export default [
  function logOut ({state}) {
    console.log('is valid?', isValidForm(state.get('simple')))
  }
]
