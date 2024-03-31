// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { AuthContextProvider } from './hooks/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
