/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsPages, Menu, Songs, SongsPlay, Merchandise, Members, Awards, Booking, History, Performances, Payment, Content} from '../pages';


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
      <Stack.Screen 
        name="Merchandise"
        component={Merchandise}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Members"
        component={Members}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Awards"
        component={Awards}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Booking"
        component={Booking}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="History"
        component={History}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Performances"
        component={Performances}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Payment"
        component={Payment}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Performances"
        component={Performances}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Content"
        component={Content}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Router;