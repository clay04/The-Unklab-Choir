import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import React from 'react';
import './src/config/Firebase';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
