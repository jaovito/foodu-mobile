import React from 'react';
import {FoodColumnListProps} from './food-column-list.props';
import {Container, BuyFoodCard} from './food-column-list.styles';

export const FoodColumnList = ({foods, onPress}: FoodColumnListProps) => {
  return (
    <Container
      data={foods}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({item}) => (
        <BuyFoodCard
          name={item.name}
          about={item.about}
          image={item.file?.file_url}
          price={item.price}
          onPress={() => onPress(item.id)}
        />
      )}
    />
  );
};
