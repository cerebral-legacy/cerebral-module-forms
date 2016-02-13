import Form from 'cerebral-module-forms/Form';
import formSubmitted from './signals/formSubmitted';

export default (options = {}) => {
  return (module, controller) => {

    module.state(Form({
      customer: Form({
        first: {
          value: '',
          isRequired: true
        },
        last: {
          value: '',
          isRequired: true
        },
        email: {
          value: '',
          isRequired: true,
          validations: [{
            isEmail: true
          }],
          errorMessages: ['Please enter a valid email address'],
          dependents: [
            ['..', 'email2'],
            ['checkout', 'customer', 'email3']
            //['.', '..', 'email2'] // Also works
          ]
        },
        email2: {
          value: '',
          isRequired: true,
          validations: ['equalsField:"email"', 'isEmail'],
          errorMessages: ['Please enter the same email address as above',
                          'Please enter a valid email address']
        },
        email3: {
          value: '',
          isRequired: true,
          validations: ['equalsField:"email"', 'isEmail'],
          errorMessages: ['Please enter the same email address as above',
                          'Please enter a valid email address']
        },
        country: {
          value: '',
          isRequired: true,
          options: [
            {value: '', text: ''},
            {value: 'US', text: 'United States'},
            {value: 'AU', text: 'Australia'}
          ]
        },
        address: Form({
          street: {
            value: '',
            isRequired: true
          },
          city: {
            value: '',
            isRequired: true
          },
          state: {
            value: '',
            isRequired: true,
            options: [
              {value: '', text: ''},
              {value: 'AZ', text: 'Arizona'},
              {value: 'IN', text: 'Indiana'}
            ]
          },
          postCode: {
            value: '',
            isRequired: true
          }
        }),
        phone: {
          value: '',
          isRequired: true
        }
      }),
      card: Form({
        name: {
          value: '',
          isRequired: true
        },
        number: {
          value: '',
          isRequired: true,
          validations: ['isNumeric'],
          errorMessages: ['Credit card numbers may only contain numbers']
        },
        month: {
          value: '',
          isRequired: true,
          validations: ['isNumeric', 'isMonth'],
          errorMessages: ['Please enter the month as a number',
                          'Please enter a valid month number']
        },
        year: {
          value: '',
          isRequired: true,
          validations: ['isNumeric', 'maxLength:2'],
          errorMessages: ['Please enter the year as a number',
                          'Please enter a two digit year']
        },
        cvv: {
          value: '',
          isRequired: true,
          validations: ['isNumeric', 'maxLength:4'],
          errorMessages: ['Card security codes are numbers',
                          'Card security codes are 4 digits long']
        },
        postCode: {
          value: '',
          isRequired: true
        }
      }),
      other: Form({
        requests: {
          value: ''
        },
        spam: {
          value: '',
          isRequired: true,
          options: [
            {value: 'yes', text: 'Yes, please!'},
            {value: 'no', text: 'No thank you.'}
          ]
        },
        hear: Form({
          television: {
            value: false,
            label: 'Television' // NOTE: Server can control form with HOC
          },
          radio: {
            value: false,
            label: 'Radio'
          },
          newspaper: {
            value: false,
            label: 'Newspaper'
          },
          internet: {
            value: false,
            label: 'Internet'
          },
          friend: {
            value: false,
            label: 'Friend'
          }
        }),
        multiple: {
          value: [],
          isRequired: true,
          options: [
            {value: 'television', text: 'Television'},
            {value: 'radio', text: 'Radio'},
            {value: 'newspaper', text: 'Newspaper'},
            {value: 'internet', text: 'Internet'},
            {value: 'friend', text: 'Friend'}
          ]
        },
        file: {
          value: '',
          isRequired: true,
        }
      })
    }));

    module.signals({
      formSubmitted
    });
  };
}
