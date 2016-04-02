function setInvalidUsername({state,input}) {
  state.merge('async.username', {
    isValid: false,
    isValidating: false,
    isValidated: true,
    errorMessage: input.message
  });
}

export default setInvalidUsername;
