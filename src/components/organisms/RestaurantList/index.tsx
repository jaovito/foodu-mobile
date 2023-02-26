import {RestaurantCard} from '@components/molecules/RestaurantCard';
import {useNavigate} from '@hooks/useNavigate';
import React from 'react';
import {RestaurantListProps} from './props';
import {Container} from './styles';

export const RestaurantList = ({restaurants}: RestaurantListProps) => {
  const {navigate} = useNavigate();

  function handleNavigatoToDrawer(id: string) {
    navigate('Tab', {screen: 'Home', params: {id}});
  }

  return (
    <Container
      data={restaurants}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <RestaurantCard
          name={item.name}
          address={item.address}
          image={item.file?.file_url}
          onPress={() => handleNavigatoToDrawer(item.id)}
        />
      )}
    />
  );
};
