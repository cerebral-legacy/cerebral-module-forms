import filesAdded from '../actions/filesAdded'
import validate from 'cerebral-module-forms/actions/validate'
import touchField from 'cerebral-module-forms/actions/touchField'
import hasValue from 'cerebral-module-forms/actions/hasValue'
import validateRequired from 'cerebral-module-forms/actions/validateRequired'
import shouldValidate from 'cerebral-module-forms/actions/shouldValidate'

export default [
  touchField,
  filesAdded,
  hasValue,
  validateRequired,
  shouldValidate, {
    yes: [
      validate
    ],
    no: []
  }
]
