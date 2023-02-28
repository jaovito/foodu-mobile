import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {TextProps} from '../Text';

export interface TextButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  textProps?: Partial<TextProps>;
}
