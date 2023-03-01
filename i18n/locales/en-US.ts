export default {
  info: {
    appName: 'Foodu',
    language: 'en-US',
  },
  onboarding: {
    title: 'We will \n make your stomach full and healthy',
    description:
      'All the best restaurants with their top menu waiting for you, they can’t wait for your order!',
  },
  signIn: {
    title: 'Welcome',
    signUp: 'Sign Up',

    email: {
      label: 'Email',
      placeholder: 'Enter your email',

      errors: {
        required: 'Please enter an email address',
        valid: 'Please enter a valid email address',
      },
    },
    password: {
      label: 'Password',
      placeholder: '******',

      errors: {
        required: 'Please enter a valid password',
        length: 'Please enter a password must be at least 6 characters',
      },
    },

    buttonText: 'SignIn',
  },
  signUp: {
    title: 'Sign Up',
    alreadyHaveAccount: 'I already have an account',

    name: {
      label: 'Name',
      placeholder: 'Enter your name',

      errors: {
        required: 'The name is required',
      },
    },
    cel: {
      label: 'Phone number',
      placeholder: 'Enter your phone number',

      errors: {
        required: 'Phone number is required',
        length: 'Please enter a phone number must be at least 10 numbers',
      },
    },
    email: {
      label: 'Email',
      placeholder: 'Enter your email',

      errors: {
        required: 'Please enter an email address',
        valid: 'Please enter a valid email address',
      },
    },
    password: {
      label: 'Password',
      placeholder: '******',

      errors: {
        required: 'Please enter a valid password',
        length: 'Please enter a password must be at least 6 characters',
      },
    },

    buttonText: 'Register',
  },
  location: {
    title: 'Where are you from?',
    address: 'Address',
    postalCode: 'Postal Code',
    city: 'City',
    state: 'State/Province',
    save: 'Salvar',

    errors: {
      addressRequired: 'Type some address',
    },
  },
  food: {
    size: 'Size',
    energy: 'Energy',
    delivery: 'Deliver',
    about: 'About',

    addCart: 'Add to Cart',
  },
  general: {
    yourLocation: 'Your Location',
    orderFavoriteFood: 'Order Your \nFavorite Food',
    city: 'Follow me',
    seeMore: 'See more',
    empty: 'Nothing to see',
  },
  errors: {
    generic: 'An error occurred, please try again later',
  },
};
