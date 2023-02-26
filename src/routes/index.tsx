import {NavigationContainer} from '@react-navigation/native';
import {UnsignedRoutes} from './unsigned.routes';
import {observer} from 'mobx-react';
import {store} from '@store/index';
import {AppRoutes} from './app.routes';

export const Routes = observer(() => {
  return (
    <NavigationContainer>
      {store.user ? <AppRoutes /> : <UnsignedRoutes />}
    </NavigationContainer>
  );
});
