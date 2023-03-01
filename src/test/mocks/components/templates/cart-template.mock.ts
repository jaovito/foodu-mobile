import {CartListProps} from '@components/organisms/CartList';
import {FoodSize} from '../../../../generated/graphql';

interface CartTemplateMock {
  cart: CartListProps['cart'];
  onDelete: () => void;
  onSave: () => void;
}

export const cartTemplate: CartTemplateMock = {
  cart: [
    {
      id: '1',
      name: 'Burger',
      price: 20,
      size: FoodSize.Big,
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor nihil nam blanditiis nobis dignissimos qui itaque, quaerat labore beatae neque esse asperiores, corporis dolore odit quas perferendis, modi explicabo!',
      counter: 1,
      energy: '120 KCal',
      file: {
        file_url: 'http://',
      },

      created_at: '2023-02-28T17:42:03.934Z',
      updated_at: '2023-02-28T17:42:03.934Z',
    },
    {
      id: '2',
      name: 'Pizza',
      price: 30,
      size: FoodSize.Big,
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor nihil nam blanditiis nobis dignissimos qui itaque, quaerat labore beatae neque esse asperiores, corporis dolore odit quas perferendis, modi explicabo!',
      counter: 2,
      energy: '130 KCal',
      file: {
        file_url: 'http://',
      },

      created_at: '2023-02-28T17:42:03.934Z',
      updated_at: '2023-02-28T17:42:03.934Z',
    },
  ],
  onDelete: jest.fn(),
  onSave: jest.fn(),
};
