import {ReactNode} from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {TextProps} from '../Text/text.props';

export interface ButtonProps extends RectButtonProps {
  children: ReactNode;
  textProps?: Partial<TextProps>;
}
