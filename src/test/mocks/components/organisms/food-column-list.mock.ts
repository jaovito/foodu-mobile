import {FoodSize} from '../../../../generated/graphql';

export const foodColumnList = {
  foods: [
    {
      id: '1',
      name: 'Chicken Burguer',
      created_at: '2023-02-28T17:42:03.934Z',
      updated_at: '2023-02-28T17:42:03.934Z',
      price: 100,
      energy: '100 KCal',
      size: FoodSize.Big,
    },
    {
      id: '2',
      name: 'Simple Burguer',
      created_at: '2023-02-28T17:42:03.934Z',
      updated_at: '2023-02-28T17:42:03.934Z',
      price: 120,
      energy: '120 KCal',
      size: FoodSize.Big,
    },
  ],
  onPress: jest.fn(),
};
