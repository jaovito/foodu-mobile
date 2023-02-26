export default {
  info: {
    appName: 'Foodu',
    language: 'pt-BR',
  },
  onboarding: {
    title: 'Nós vamos deixar te deixar de barriga cheia',
    description: `Todos os melhores restaurantes com seus melhores
    menu esperando por você, eles não podem esperar
    para o seu pedido!`,
  },
  signIn: {
    title: 'Bem-vindo',

    email: {
      label: 'E-mail',
      placeholder: 'Digite seu e-mail',

      errors: {
        required: 'Digite um e-mail',
        valid: 'Digite um e-mail válido',
      },
    },
    password: {
      label: 'Senha',
      placeholder: '******',

      errors: {
        required: 'Por favor digite uma senha',
        length: 'Digite uma senha com pelo menos 6 digitos',
      },
    },

    buttonText: 'Entrar',
  },
  location: {
    title: 'De onde você é?',
    address: 'Endereço',
    postalCode: 'CEP',
    city: 'Me seguindo',
    state: 'Estado',
    save: 'Salvar',

    errors: {
      addressRequired: 'Digite um e-mail',
    },
  },
  food: {
    size: 'Tamanho',
    energy: 'Calorias',
    delivery: 'Entrega',
    about: 'Detalhes',

    addCart: 'Adicionar no carrinho',
  },
  general: {
    yourLocation: 'Sua localização',
    orderFavoriteFood: 'Peça Sua \nComida Favorita',
    city: 'Cidade de {city}',
    seeMore: 'Ver mais',
  },
  errors: {
    generic: 'Houve um erro, tente novamente mais tarde',
  },
};
