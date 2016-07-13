function setValidUsername ({state}) {
  state.merge('async.username', {
    isValid: true,
    isValidating: false,
    isValidated: true
  })
}

export default setValidUsername
