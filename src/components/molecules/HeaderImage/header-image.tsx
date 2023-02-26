import {
  Background,
  City,
  Container,
  Title,
  YourLocation,
} from './header-image.styles';

import headerImg from '../../../assets/header.png';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {useNavigate} from '@hooks/useNavigate';
import {HeaderImageProps} from './header-image.props';

export const HeaderImage = ({address}: HeaderImageProps) => {
  const {navigate} = useNavigate();

  function handleNavigateLocation() {
    navigate('Location');
  }

  return (
    <Container>
      <Background source={headerImg} resizeMode="cover">
        <YourLocation>
          {translate(LanguagePaths.GENERAL_YOUR_LOCATION)}
        </YourLocation>
        <City
          fontWeight="semiBold"
          numberOfLines={1}
          onPress={handleNavigateLocation}>
          {address || translate(LanguagePaths.GENERAL_CITY)}
        </City>
        <Title fontWeight="semiBold">
          {translate(LanguagePaths.GENERAL_ORDER_FAVORITE_FOOD)}
        </Title>
      </Background>
    </Container>
  );
};
