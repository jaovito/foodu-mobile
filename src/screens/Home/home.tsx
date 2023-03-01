import {Loading} from '@components/atoms/Loading';
import {FoodsTemplate} from '@components/templates/FoodsTemplate';
import {useNavigate} from '@hooks/useNavigate';
import {useRoute} from '@react-navigation/native';
import {store} from '@store/index';
import React from 'react';

import {useFindAllFoodsQuery} from '../../generated/graphql';
import {HomeParamsProps} from './home.props';

export const Home = () => {
  const {
    location: {address},
  } = store;

  const {params} = useRoute();
  const {id} = params as HomeParamsProps;
  const {navigate} = useNavigate();

  const [{data, fetching}] = useFindAllFoodsQuery({
    variables: {
      findFoodInput: {
        restaurant_id: id,
      },
    },
  });

  function handleGoFood(foodId: string) {
    navigate('Food', {id: foodId});
  }

  return (
    <>
      {fetching ? (
        <Loading />
      ) : (
        <FoodsTemplate
          address={address}
          foods={data?.foods}
          onPress={handleGoFood}
        />
      )}
    </>
  );
};
