import {Button} from '@components/atoms/Button';
import {Counter} from '@components/molecules/Counter';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import React, {forwardRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {NutritionInfo} from '../../organisms/NutritionInfo';
import {FoodInfoProps} from './food-template.props';
import {
  Container,
  Title,
  PriceContainer,
  Price,
  FoodDescription,
} from './food-template.styles';

const FoodInfoComponent: React.ForwardRefRenderFunction<
  Modalize,
  FoodInfoProps
> = (
  {
    name,
    price,
    counter,
    onIncrement,
    onDecrement,
    delivery,
    size,
    energy,
    onAddToCart,
  },
  ref,
) => {
  return (
    <Container withHandle={true} ref={ref}>
      <Title fontWeight="semiBold">{name}</Title>

      <PriceContainer>
        <Price fontWeight="medium">$ {price.toFixed(2)}</Price>

        <Counter
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </PriceContainer>

      <NutritionInfo delivery={delivery} size={size} energy={energy} />

      <FoodDescription
        title={translate(LanguagePaths.FOOD_ABOUT)}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore dicta, et fugit natus aspernatur unde velit magni iure voluptatem praesentium suscipit qui consequuntur inventore eveniet. Quibusdam incidunt in temporibus?"
      />

      <Button onPress={onAddToCart}>
        {translate(LanguagePaths.FOOD_ADD_CART)}
      </Button>
    </Container>
  );
};

export const FoodInfo = forwardRef<Modalize, FoodInfoProps>(FoodInfoComponent);
