import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
