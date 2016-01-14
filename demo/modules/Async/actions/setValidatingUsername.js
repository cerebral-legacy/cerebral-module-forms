function setValidatingUsername({module}) {
  module.state.set(['username', 'isValidating'], true);
}

export default setValidatingUsername;
