import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/components/Login';
import Search from './src/screens/components/Search';
import Details from './src/screens/components/Details';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Login'}
          headerMode='screen'
          screenOptions={{
            cardStyle:{
              backgroundColor:'white'
            },
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;