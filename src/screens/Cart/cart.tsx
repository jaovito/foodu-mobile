import React from 'react';
import {CartCard} from '@components/molecules/CartCard';
import {View} from 'react-native';

export const Cart = () => {
  return (
    <View style={{padding: 24}}>
      <CartCard
        name="Chicken burger"
        description="lorem ipsum dolor sit amet dolor sit amet al metus in diam non pro id vel"
        price={20}
        counter={1}
        image="http://github.com/jaovito.png"
      />
    </View>
  );
};
