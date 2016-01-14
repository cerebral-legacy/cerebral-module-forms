import toJSON from 'cerebral-module-forms/helpers/toJSON';

export default [
  function logOut({state}) {
    console.log(JSON.stringify(toJSON(state.get(['simple'])), null, 4));
  }
]
