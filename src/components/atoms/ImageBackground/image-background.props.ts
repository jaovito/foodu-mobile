import {ReactNode} from 'react';
import {ImageBackgroundProps as RNImageBackgroundProps} from 'react-native/types';

export interface ImageBackgroundProps extends Partial<RNImageBackgroundProps> {
  children: ReactNode;
}
