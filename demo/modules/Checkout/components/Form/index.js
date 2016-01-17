import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import FormHOC from 'cerebral-module-forms/react/HOC';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

import PureInput from '../../../PureUI/components/PureInput';
import PureSelect from '../../../PureUI/components/PureSelect';
import PureTextarea from '../../../PureUI/components/PureTextarea';
import PureRadio from '../../../PureUI/components/PureRadio';
import PureCheckbox from '../../../PureUI/components/PureCheckbox';

import classNames from 'classnames/bind'
import styles from './styles.css';
const cx = classNames.bind(styles);

const Input = FormHOC(PureInput);
const Select = FormHOC(PureSelect);
const Textarea = FormHOC(PureTextarea);
const Radio = FormHOC(PureRadio);
const Checkbox = FormHOC(PureCheckbox);

@Cerebral({
  form: ['checkout']
})
class Checkout extends React.Component {

  render() {
    const {signals, form} = this.props;
    const isValid = isValidForm(form);

    return (
      <div className='pure-g'>
        <div className={cx('pure-u-1', 'form')}>
          <h1>Checkout</h1>

          <form className='pure-form pure-form-stacked'>
            <fieldset>

              <legend>Customer Information</legend>

              <div className='pure-g'>
                <Input field={['checkout', 'customer', 'first']}
                       type='text'
                       label='First Name'
                       placeholder='First Name'
                       containerClassName='pure-u-1 pure-u-sm-11-24' />

                <Input field={['checkout', 'customer' ,'last']}
                       type='text'
                       label='Last Name'
                       placeholder='Last Name'
                       containerClassName='pure-u-1 pure-u-sm-11-24' />
              </div>

              <Input field={['checkout', 'customer' ,'email']}
                     type='text'
                     label='Email'
                     placeholder='john@example.org' />

              <Input field={['checkout', 'customer' ,'email2']}
                     type='text'
                     label='Verify Email'
                     placeholder='john@example.org' />

              <Select field={['checkout', 'customer' ,'country']}
                      type='text'
                      label='Country' />

              <Input field={['checkout', 'customer' ,'address', 'street']}
                     type='text'
                     label='Street Address'
                     placeholder='123 Some pl.' />

              <div className='pure-g'>
                <Input field={['checkout', 'customer' ,'address', 'city']}
                       type='text'
                       label='City'
                       placeholder='West Lafayette'
                       containerClassName='pure-u-1 pure-u-sm-8-24' />

                <Select field={['checkout', 'customer' ,'address', 'state']}
                        label='State'
                        containerClassName='pure-u-1 pure-u-sm-7-24' />

                <Input field={['checkout', 'customer' ,'address', 'postCode']}
                       type='text'
                       label='Zip / Postal Code'
                       containerClassName='pure-u-1 pure-u-sm-6-24' />
              </div>

              <Input field={['checkout', 'customer', 'phone']}
                     type='tel'
                     label='Phone Number' />

            </fieldset>

            <fieldset>
              <legend>Payment</legend>

              <Input field={['checkout', 'card', 'name']}
                     type='text'
                     label='Cardholder Name' />

              <Input field={['checkout', 'card', 'number']}
                     type='tel'
                     label='Card Number' />

              <div className='pure-g'>
                <Input field={['checkout', 'card', 'month']}
                      type='tel'
                      label='Month'
                      placeholder='mm'
                      containerClassName='pure-u-1 pure-u-sm-4-24' />

                <Input field={['checkout', 'card', 'year']}
                      type='tel'
                      label='Year'
                      placeholder='yy'
                      containerClassName='pure-u-1 pure-u-sm-4-24' />

                <Input field={['checkout', 'card', 'cvv']}
                      type='tel'
                      label='CVV'
                      containerClassName='pure-u-1 pure-u-sm-4-24' />

                <Input field={['checkout', 'card', 'postCode']}
                      type='tel'
                      label='Billing Zip / Postal Code'
                      containerClassName='pure-u-1 pure-u-sm-7-24' />
              </div>

            </fieldset>

            <fieldset>
              <legend>Other Information</legend>

              <Textarea field={['checkout', 'other', 'requests']}
                        rows='3'
                        label='Special Requests' />

              <Radio field={['checkout', 'other', 'spam']}
                     label='May we SPAM you?' />

              <legend>How did you hear about us?</legend>

              {/* Server can control form with HOC, e.g., label is state */}
              {Object.keys(form.other.hear).map((key, i) =>
                <Checkbox key={i} field={['checkout', 'other', 'hear', key]} />
              )}

              <Select field={['checkout', 'other', 'multiple']}
                      label='How did you hear about us? (test select multiple)'
                      multiple />

              <Input field={['checkout', 'other', 'file']}
                     type='file'
                     label='Upload addtional info' />

            </fieldset>

            <div className={cx('controls')}>
              <button className={cx('pure-button')}
                      disabled={!isValid}
                      onClick={(event) => {
                        event.preventDefault();
                        signals.checkout.formSubmitted();
                      }}>
                <i className={cx('fa', 'fa-shopping-cart', 'fa-lg')}></i>
                <span>Checkout</span>
              </button>

              <button className={cx('pure-button')}
                      onClick={(event) => {
                        event.preventDefault();
                      }}>
                Reset
              </button>
            </div>

          </form>

        </div>
      </div>
    );
  }
}

export default Checkout;

