import React from 'react';
import CerebralForm from 'cerebral-module-forms/react/HOC';
import cx from 'classnames';

function PureCheckbox(props) {
  const id = props.id || props.field.join('.');
  const {containerClassName,
         checkboxClassName,
         label,
         errorMessage,
         options,
         isRequired,
         isTouched,
         isValid,
         ...otherProps} = props;

  const containerClasses = {
    required: isRequired,
    error: isTouched && !isValid
  };

  return (
    <div className={cx(containerClassName, containerClasses)}>
      <aside className='pure-form-message'>
        {isTouched ? errorMessage : null}
      </aside>
      <label htmlFor={id} className='pure-checkbox'>
        <input {...otherProps}
              type='checkbox'
              id={id}
              name={props.name || id}
              checked={props.value}
              className={checkboxClassName} />
        <span>{props.label}</span>
      </label>
    </div>
  );
}

PureCheckbox.defaultProps = {
  containerClassName: 'pure-u-1',
};

export default CerebralForm(PureCheckbox);
