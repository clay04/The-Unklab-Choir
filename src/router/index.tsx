/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Songs} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Songs"
        component={Songs}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Router;
