import Form from 'cerebral-module-forms/Form';
import filesAdded from './signals/filesAdded';
import onFileProgress from './signals/onFileProgress';
import onFileEnd from './signals/onFileEnd';

export default (options = {}) => {
  return (module, controller) => {

    module.addState(Form({
      file: {
        value: [],
        validations: ['minLength:1','extensions:[".pdf",".mp4"]'],
        errorMessages: ['','the file must be a pdf']
      }
    }));

    module.addSignals({
      filesAdded,
      onFileProgress,
      onFileEnd
    });

  };
}
