import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/@types/routes';
import {Restaurants} from '@screens/Restaurants';
import TabRoutes from './tab.routes';
import {Food} from '@screens/Food';
import {Location} from '@screens/Location';
import theme from '@theme';
import {AddValue} from '@screens/AddValue';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.colors.background},
      }}>
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="Tab" component={TabRoutes} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="AddValue" component={AddValue} />
    </Stack.Navigator>
  );
}
