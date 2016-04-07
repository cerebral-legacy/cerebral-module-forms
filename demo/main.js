import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Devtools from 'cerebral-module-devtools';
import {Container} from 'cerebral-view-react';
import Forms from 'cerebral-module-forms';

import Simple from './modules/Simple';
import SimpleForm from './modules/Simple/components/Form';

import Contract from './modules/Contract';
import ContractForm from './modules/Contract/components/Form';

import List from './modules/List';
import ListForm from './modules/List/components/Form';

import Async from './modules/Async';
import AsyncForm from './modules/Async/components/Form';

import Checkout from './modules/Checkout';
import CheckoutForm from './modules/Checkout/components/Form';

import UploadSimple from './modules/UploadSimple';
import UploadSimpleForm from './modules/UploadSimple/components/Form';

const controller = Controller(Model({}));

controller.addModules({
  devtools: Devtools(),
  simple: Simple(),
  contract: Contract(),
  list: List(),
  async: Async(),
  checkout: Checkout(),
  uploadSimple: UploadSimple(),
  forms: Forms({
    rules: {
      isMonth: (value) => {
      	return value >= 1 && value <= 12;
      },
      extensions: (value,form,params) => {
        let res = params.reduce((acc, ext) => {
        	if( value[0].name.toLowerCase().endsWith( ext ) ){
        		acc.push( ext );
        	}
        	return acc;
        },[]);
        return res.length > 0;
      }
    }
  })
});

const ExampleStyle = {
  display: 'inline-block',
  verticalAlign: 'top',
  padding: 20,
  margin: 20,
  border: '1px solid #333',
  backgroundColor: '#fafafa',
  fontSize: '.9em'
};

ReactDOM.render((
  <Container controller={controller}>
    <div style={ExampleStyle}>
      <h1>Simple Form (Low level code)</h1>
      <SimpleForm/>
    </div>
    <div style={ExampleStyle}>
      <h1>Contract Form (Abstracted)</h1>
      <ContractForm/>
    </div>
    <div style={ExampleStyle}>
      <h1>List Form (Dynamic)</h1>
      <ListForm/>
    </div>
    <div style={ExampleStyle}>
      <h1>Username Form (Custom Async)</h1>
      <AsyncForm/>
    </div>
    <div style={ExampleStyle}>
      <CheckoutForm />
    </div>
    <div style={ExampleStyle}>
      <UploadSimpleForm />
    </div>
  </Container>
), document.getElementById('root'));
