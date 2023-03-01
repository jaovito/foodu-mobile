import {TextButton} from '@components/atoms/TextButton';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
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
      ListEmptyComponent={
        <TextButton>
          {translate(LanguagePaths.GENERAL_NOTHING_TO_SEE)}
        </TextButton>
      }
    />
  );
};
