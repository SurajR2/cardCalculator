import React from 'react';
import IntroScreen from './components/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallBreak from './components/CallBreak';
import Larra from './components/Larra';
import Marriage from './components/Marriage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Card Game Calculator" component={IntroScreen} />
        <Stack.Screen name="CallBreak Calculator" component={CallBreak} />
        <Stack.Screen name="Larra Calculator" component={Larra} />
        <Stack.Screen name="Marriage Calculator" component={Marriage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
