function setInvalidUsername({input, module}) {
  module.state.merge(['username'], {
    isValid: false,
    isValidating: false,
    isValidated: true,
    errorMessage: input.message
  });
}

export default setInvalidUsername;
