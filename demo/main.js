import React from 'react'
import ReactDOM from 'react-dom'
import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'
import Devtools from 'cerebral-module-devtools'
import {Container} from 'cerebral-view-react'
import Forms from 'cerebral-module-forms'

import Simple from './modules/Simple'
import SimpleForm from './components/Simple/Form'

const controller = Controller(Model({}))

controller.addModules({
  devtools: Devtools(),
  simple: Simple(),
  forms: Forms()
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
        <h1>Simple Form</h1>
        <SimpleForm/>
      </div>
    </div>
  </Container>
, document.getElementById('root'))
