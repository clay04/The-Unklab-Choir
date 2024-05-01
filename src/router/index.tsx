/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsPages, Menu, Songs, SongsPlay} from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Menu"
        component={Menu}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Songs"
        component={Songs}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Albums"
        component={AlbumsPages}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="SongsPlay"
        component={SongsPlay}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Router;
