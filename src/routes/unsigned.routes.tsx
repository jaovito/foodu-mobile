import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landing} from '../screens/Landing';
import {RootStackParamList} from 'src/@types/routes';
import {SignIn} from '@screens/SignIn';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function UnsignedRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Landing} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
