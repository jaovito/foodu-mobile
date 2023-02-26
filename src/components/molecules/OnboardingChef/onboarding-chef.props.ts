import {ImageBackgroundProps} from '@components/atoms/ImageBackground/image-background.props';

export interface OnboardingChefProps
  extends Omit<ImageBackgroundProps, 'children'> {
  title: string;
  description: string;

  onPress: () => void;
}
