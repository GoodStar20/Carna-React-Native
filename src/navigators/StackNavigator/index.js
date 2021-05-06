import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, View, Text } from 'native-base';

import { Routes } from 'Navigators/routes';

const Stack = createStackNavigator();
const options = {
  headerShown: false
};

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName={Routes.Login} screenOptions={options}>
    <Stack.Screen
      name={Routes.Login}
      component={Partner}
      // options={{ gestureEnabled: false }}
    />
  </Stack.Navigator>
);

function Partner() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Partners!</Text>
    </View>
  );
}
