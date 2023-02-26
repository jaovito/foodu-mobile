import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import React from 'react';
import {NutritionInfoProps} from './nutrition-info.props';
import {Container, NutritionCard} from './nutrition-info.styles';

export const NutritionInfo = ({size, energy, delivery}: NutritionInfoProps) => {
  return (
    <Container>
      <NutritionCard title={translate(LanguagePaths.FOOD_SIZE)} info={size} />

      <NutritionCard
        title={translate(LanguagePaths.FOOD_ENERGY)}
        info={energy}
      />

      <NutritionCard
        title={translate(LanguagePaths.FOOD_DELIVERY)}
        info={delivery}
      />
    </Container>
  );
};
