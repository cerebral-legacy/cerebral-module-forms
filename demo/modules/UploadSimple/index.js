import Form from 'cerebral-module-forms/Form'
import filesAdded from './chains/filesAdded'
import onFileProgress from './chains/onFileProgress'
import onFileEnd from './chains/onFileEnd'

export default (options = {}) => {
  return (module, controller) => {
    module.addState(Form({
      file: {
        value: [],
        validations: ['minLength:1', 'extensions:[".pdf",".mp4"]'],
        errorMessages: ['', 'the file must be a pdf']
      }
    }))

    module.addSignals({
      filesAdded,
      onFileProgress,
      onFileEnd
    })
  }
}
