import {Container} from './styles';
import {HeaderImage} from '@components/molecules/HeaderImage';
import {StatusBar} from 'expo-status-bar';
import {FoodsTemplateProps} from './props';
import {FoodColumnList} from '@components/organisms/FoodColumnList';

export const FoodsTemplate = ({
  foods,
  onPress,
  address,
}: FoodsTemplateProps) => {
  return (
    <Container>
      <HeaderImage address={address} />

      <FoodColumnList foods={foods} onPress={onPress} />

      <StatusBar style="light" />
    </Container>
  );
};
