import React from 'react';
import CerebralForm from 'cerebral-module-forms/react/HOC';
import cx from 'classnames';

function PureRadio(props) {
  const id = props.id || props.field.join('.');
  const {containerClassName,
         radioClassName,
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
      <legend>{label}</legend>
      <aside className='pure-form-message'>
        {isTouched ? errorMessage : null}
      </aside>

      {options.map((option, index) =>
        <label key={index} htmlFor={`${id}-${index}`} className='pure-radio'>
          <input {...otherProps}
                type='radio'
                id={`${id}-${index}`}
                name={props.name || id}
                value={option.value}
                checked={option.value === props.value}
                className={radioClassName} />
          <span>{option.text}</span>
        </label>
      )}
    </div>
  );
}

PureRadio.defaultProps = {
  containerClassName: 'pure-u-1'
};

export default CerebralForm(PureRadio);
