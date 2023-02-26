import {TouchableOpacityProps} from 'react-native';

export interface PrimaryButtonProps extends TouchableOpacityProps {
  iconName: string;
  color?: string;
}

export interface PrimaryButtonStyleProps {
  color?: string;
}
