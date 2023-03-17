import {BorderlessButtonProps} from 'react-native-gesture-handler';

export interface PrimaryButtonProps extends BorderlessButtonProps {
  iconName: string;
  color?: string;
}

export interface PrimaryButtonStyleProps {
  color?: string;
}
