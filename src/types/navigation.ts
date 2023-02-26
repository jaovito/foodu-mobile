import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AppScreens = {
  Home: undefined;
  Onboarding: undefined;
  SignIn: undefined;
};

export type TNavigationProps<T extends keyof AppScreens> =
  NativeStackScreenProps<AppScreens, T>;
