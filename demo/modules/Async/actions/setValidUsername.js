function setValidUsername({module}) {
  module.state.merge(['username'], {
    isValid: true,
    isValidating: false,
    isValidated: true
  });
}

export default setValidUsername;
