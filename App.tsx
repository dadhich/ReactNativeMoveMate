// App.tsx
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {logApiConfig} from './src/config/apiConfig'; // Import the logger

const App = () => {
  useEffect(() => {
    logApiConfig(); // Log API config on app start during development
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;