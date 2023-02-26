import {BackButton} from '@components/atoms/BackButton';
import {FavoriteButton} from '@components/atoms/FavoriteButton';
import {BackFavoriteHeaderProps} from './back-favorite-header.props';
import {Container} from './back-favorite-header.styles';

export const BackFavoriteHeader = ({
  onFavorite,
  onGoBack,
}: BackFavoriteHeaderProps) => {
  return (
    <Container>
      <BackButton testID="BackButtonID" onPress={onGoBack} />

      <FavoriteButton testID="FavoriteButtonID" onPress={onFavorite} />
    </Container>
  );
};
