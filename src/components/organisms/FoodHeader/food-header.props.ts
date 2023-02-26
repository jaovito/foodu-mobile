import {ViewProps} from 'react-native';

export interface FoodHeaderProps extends ViewProps {
  onFavorite: (id: string) => void;
  onGoBack: () => void;
  image?: string;
  foodId: string;
}
