import setValidatingUsername from '../actions/setValidatingUsername';
import checkUsername from '../actions/checkUsername';
import setValidUsername from '../actions/setValidUsername';
import setInvalidUsername from '../actions/setInvalidUsername';

export default [
  setValidatingUsername,
  [
    checkUsername, {
      success: [setValidUsername],
      error: [setInvalidUsername]
    }
  ]
];
