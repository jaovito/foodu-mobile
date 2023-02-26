import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

// @ts-ignore
export const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    createSocket: path => new ReactotronFlipper(path),
    name: 'Foodu',
  }) // controls connection & communication settings
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /logs|symbolicate/,
    },
  }) // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;
