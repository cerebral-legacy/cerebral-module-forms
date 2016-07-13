import React from 'react'
import ReactDOM from 'react-dom'
import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'
import Devtools from 'cerebral-module-devtools'
import {Container} from 'cerebral-view-react'
import Forms from 'cerebral-module-forms'

import Simple from './modules/Simple'
import SimpleForm from './components/Simple/Form'

import Async from './modules/Async'
import AsyncForm from './components/Async/Form'

import UploadSimple from './modules/UploadSimple'
import UploadSimpleForm from './components/UploadSimple/Form'

const controller = Controller(Model({}))

controller.addModules({
  devtools: Devtools(),
  simple: Simple(),
  async: Async(),
  uploadSimple: UploadSimple(),
  forms: Forms({
    rules: {
      isMonth: (value) => {
        return value >= 1 && value <= 12
      },
      extensions: (value, form, params) => {
        let res = params.reduce((acc, ext) => {
          if (value[0].name.toLowerCase().endsWith(ext)) {
            acc.push(ext)
          }
          return acc
        }, [])
        return res.length > 0
      }
    }
  })
})

const ExampleStyle = {
  display: 'inline-block',
  verticalAlign: 'top',
  padding: 20,
  margin: 20,
  border: '1px solid #333',
  backgroundColor: '#fafafa',
  fontSize: '.9em'
}

ReactDOM.render(
  <Container controller={controller}>
    <div>
      <div style={ExampleStyle}>
        <h1>Simple Form (Low level code)</h1>
        <SimpleForm/>
      </div>
      <div style={ExampleStyle}>
        <h1>Username Form (Custom Async)</h1>
        <AsyncForm/>
      </div>
      <div style={ExampleStyle}>
        <UploadSimpleForm />
      </div>
    </div>
  </Container>
, document.getElementById('root'))
