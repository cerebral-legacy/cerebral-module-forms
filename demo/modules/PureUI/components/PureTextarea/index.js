import React from 'react';
import cx from 'classnames';

function PureTextarea(props) {
  const id = props.id || props.field.join('.');
  const {containerClassName,
         textareaClassName,
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
      <textarea {...otherProps} id={id} className={textareaClassName} />
      <aside className='pure-form-message'>
        {isTouched ? errorMessage : null}
      </aside>
    </div>
  );
}

PureTextarea.defaultProps = {
  containerClassName: 'pure-u-1',
  textareaClassName: 'pure-u-1'
};

export default PureTextarea;
