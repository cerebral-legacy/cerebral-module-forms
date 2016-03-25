import toJSON from 'cerebral-module-forms/helpers/toJSON';

export default [
  function logOut({state, module}) {
    console.log(JSON.stringify(toJSON(module.state.get()), null, 4));
  }
]
