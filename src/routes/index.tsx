import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

// Screens
import SignIn from '../screems/Signin';
import Dashboard from '../screems/Dashboard';

type RootStackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
};

export type SignInProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

function StackRounter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <StackRounter />
    </NavigationContainer>
  );
}
