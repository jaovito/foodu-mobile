type TabRoute<T> = {
  screen: keyof RootDrawerParamList;
  params?: T;
};

export type RootStackParamList = {
  Location: undefined;
  Restaurants: undefined;
  Onboarding: undefined;
  SignIn: undefined;
  Tab: TabRoute<{id: string}>;
  Food: {id: string};
};

export type RootDrawerParamList = {
  Home: undefined;
  Cart: undefined;
  History: undefined;
  Settings: undefined;
};
