import styled from 'styled-components/native';
import {NutritionCard as CNutritionCard} from '@components/molecules/NutritionCard';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NutritionCard = styled(CNutritionCard)`
  margin-top: ${RFValue(32)}px;
`;
