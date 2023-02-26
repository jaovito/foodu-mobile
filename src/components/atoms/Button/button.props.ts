import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {TextProps} from '../Text/text.props';

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  textProps?: Partial<TextProps>;
}
