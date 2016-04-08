import React from 'react';
import CerebralForm from 'cerebral-module-forms/react/HOC';
import cx from 'classnames';

function PureInput(props) {
  const id = props.id || props.field.join('.');
  const {containerClassName,
         inputClassName,
         label,
         errorMessage,
         isRequired,
         isTouched,
         isValid,
         ...otherProps} = props;

  const containerClasses = {
    required: isRequired,
    error: isTouched && !isValid
  };
  otherProps.defaultValue = undefined;

  return (
    <div className={cx(containerClassName, containerClasses)}>
      <label htmlFor={id}>{label}</label>
      <input {...otherProps}
             id={id}
             name={props.name || id}
             className={inputClassName} />
      <aside className='pure-form-message'>
        {isTouched ? errorMessage : null}
      </aside>
    </div>
  );
}

PureInput.defaultProps = {
  containerClassName: 'pure-u-1',
  inputClassName: 'pure-u-1'
};

export default CerebralForm(PureInput);
