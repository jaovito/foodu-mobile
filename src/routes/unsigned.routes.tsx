import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landing} from '../screens/Landing';
import {RootStackParamList} from 'src/@types/routes';
import {SignIn} from '@screens/SignIn';
import {SignUp} from '@screens/SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function UnsignedRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Landing} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
