import theme from '@theme';
import {ReactNode} from 'react';
import {TextProps as RNTextProps} from 'react-native/types';

export interface TextProps extends RNTextProps {
  children: ReactNode;
  fontWeight?: keyof typeof theme.fontFamily;
}

export interface TextStyleProps extends TextProps {}
