import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MissionScreen from '../screens/MissionScreen';
import ZoneScreen from '../screens/ZoneScreen';
import DistrictScreen from '../screens/DistrictScreen';
import MissionaryScreen from '../screens/MissionaryScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mission">
        <Stack.Screen name="Mission" component={MissionScreen} />
        <Stack.Screen name="Zone" component={ZoneScreen} />
        <Stack.Screen name="District" component={DistrictScreen} />
        <Stack.Screen name="Missionary" component={MissionaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
