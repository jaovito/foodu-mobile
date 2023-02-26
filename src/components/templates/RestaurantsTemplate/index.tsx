import {Container} from './styles';
import {HeaderImage} from '@components/molecules/HeaderImage';
import {StatusBar} from 'expo-status-bar';
import {RestaurantList} from '@components/organisms/RestaurantList';
import {RestaurantsTemplateProps} from './props';

export const RestaurantsTemplate = ({
  restaurants,
  address,
}: RestaurantsTemplateProps) => {
  return (
    <Container>
      <HeaderImage address={address} />

      <RestaurantList restaurants={restaurants} />

      <StatusBar style="light" />
    </Container>
  );
};
