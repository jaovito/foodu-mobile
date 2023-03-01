import {FoodHeader} from '@components/organisms/FoodHeader';
import {FoodInfo} from '@components/templates/FoodTemplate';
import React, {useCallback, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {useNavigate} from '@hooks/useNavigate';

import {useFindOneFoodQuery} from '../../generated/graphql';
import {Container} from './food.styles';
import {useRoute} from '@react-navigation/native';
import {RouteParamsProps} from './food.props';
import {Loading} from '@components/atoms/Loading';
import {store} from '@store/index';
import {Alert} from 'react-native';
import {IFoodModel} from '@store/cart';

export const Food = () => {
  const [counter, setCounter] = useState(1);
  const modalizeRef = useRef<Modalize>(null);
  const {goBack, navigate} = useNavigate();
  const {cart} = store;

  const {params} = useRoute();
  const {id} = params as RouteParamsProps;

  const [foodQuery] = useFindOneFoodQuery({
    variables: {
      id: id,
    },
  });

  const handleAddFoodToCart = useCallback(async () => {
    if (foodQuery.data?.food) {
      cart.addToCart(
        {
          ...(foodQuery.data?.food as IFoodModel),
          price: foodQuery.data.food.price * counter,
        },
        counter,
      );
      return goBack();
    }

    Alert.alert('Food not found');
  }, [foodQuery.data?.food, navigate, counter]);

  if (!foodQuery?.data?.food) {
    return <Loading />;
  }

  function handleChangeCounter(action: 'increment' | 'decrement') {
    if (action === 'increment') {
      return setCounter(state => state + 1);
    } else if (counter <= 0) {
      setCounter(1);
    } else {
      setCounter(state => {
        if (state - 1 <= 0) {
          return 1;
        }

        return state - 1;
      });
    }
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <FoodHeader
        onGoBack={handleGoBack}
        onFavorite={handleGoBack}
        image={foodQuery.data.food.file?.file_url}
        foodId={foodQuery.data.food.id}
      />

      <FoodInfo
        name={foodQuery.data?.food.name}
        energy={foodQuery.data.food.energy}
        size={foodQuery.data.food.size}
        delivery={foodQuery.data.food.size}
        price={foodQuery.data.food.price * counter}
        counter={counter}
        ref={modalizeRef}
        onAddToCart={handleAddFoodToCart}
        onDecrement={() => handleChangeCounter('decrement')}
        onIncrement={() => handleChangeCounter('increment')}
      />
    </Container>
  );
};
