import {FoodSize} from '../../../generated/graphql';

export const cartStore = {
  foods: [
    {
      id: '1',
      name: 'Chicken Burguer',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      price: 100,
      energy: '100 KCal',
      about: '',
      counter: 2,
      size: FoodSize.Big,
      file: {
        file_url: 'http://',
      },
    },
    {
      id: '2',
      name: 'Simple Burguer',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      price: 120,
      energy: '120 KCal',
      about: '',
      counter: 2,
      size: FoodSize.Big,
      file: {
        file_url: 'http://',
      },
    },
  ],
  onPress: jest.fn(),
};
