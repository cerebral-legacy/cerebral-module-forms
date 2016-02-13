import React from 'react';
import CerebralForm from 'cerebral-module-forms/react/HOC';
import cx from 'classnames';

function PureSelect(props) {
  const id = props.id || props.field.join('.');
  const {containerClassName,
         selectClassName,
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
      <label htmlFor={id}>{label}</label>
      <select {...otherProps}
              id={id}
              name={props.name || id}
              className={selectClassName}>
        {options.map((option, index) =>
          <option key={index} value={option.value || option.text}>
            {option.text}
          </option>
        )}
      </select>
      <aside className='pure-form-message'>
        {isTouched ? errorMessage : null}
      </aside>
    </div>
  );
}

PureSelect.defaultProps = {
  containerClassName: 'pure-u-1',
  selectClassName: 'pure-u-1'
};

export default CerebralForm(PureSelect);
