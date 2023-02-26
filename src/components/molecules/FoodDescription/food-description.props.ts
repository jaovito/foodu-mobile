import {TextProps} from '@components/atoms/Text';
import {ViewProps} from 'react-native';

export interface FoodDescriptionProps extends ViewProps {
  title: string;
  description: string;

  titleProps?: Partial<TextProps>;
  descriptionProps?: Partial<TextProps>;
}
