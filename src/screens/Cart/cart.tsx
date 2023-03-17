import React, {useCallback} from 'react';
import {store} from '@store/index';
import {observer} from 'mobx-react';
import {useFocusEffect} from '@react-navigation/native';
import {CartTemplate} from '@components/templates/CartTemplate';
import {StatusBar} from 'expo-status-bar';

export const Cart = observer(() => {
  const {
    cart: {allFoods, refreshFoods, removeFood},
  } = store;

  const refresh = useCallback(() => {
    refreshFoods();
  }, []);

  const handleDeleteFood = useCallback(
    async (id: string) => {
      await removeFood(id);
    },
    [removeFood],
  );

  useFocusEffect(refresh);

  return (
    <>
      <CartTemplate
        onSave={() => {}}
        cart={allFoods}
        onDelete={handleDeleteFood}
      />

      <StatusBar style="dark" />
    </>
  );
});
