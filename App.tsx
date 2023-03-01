import {reactotron} from './src/debug/reactotron';

if (__DEV__) {
  reactotron?.connect();
}

import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import {observer, Provider as StoreProvider} from 'mobx-react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Routes} from './src/routes';
import theme from './src/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {View} from 'react-native';
import {store} from './src/store';
import {Provider} from 'urql';
import {client} from './src/services/urql';
import {Loading} from '@components/atoms/Loading';

SplashScreen.preventAutoHideAsync();

const App = observer(() => {
  const {loadAsyncStorage, isLoading, setLoading} = store;

  useEffect(() => {
    (async () => {
      setLoading(true);
      await loadAsyncStorage();
      setLoading(false);
    })();
  }, [loadAsyncStorage, setLoading]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Provider value={client}>
          <View style={{flex: 1, backgroundColor: theme.colors.background}}>
            {isLoading ? <Loading /> : <Routes />}
          </View>
        </Provider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
});

export default App;
