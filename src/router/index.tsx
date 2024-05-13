/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsPages, Altos, Basses, Booking, Coach, Conductor, History, Home, Login, Members, MembersMenu, Menu, Officers, Performance, ProfileMembers, Songs, SongsPlay, Sopranos, Splash, Tenors, Awards} from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Menu"
        component={Menu}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="AlbumsPage"
        component={AlbumsPages}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Songs"
        component={Songs}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="SongsPlay"
        component={SongsPlay}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="MembersMenu"
        component={MembersMenu}
        options={{headerShown: false}}/>
    <Stack.Screen 
      name="Members"
      component={Members}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Sopranos"
      component={Sopranos}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Altos"
      component={Altos}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Tenors"
      component={Tenors}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Basses"
      component={Basses}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Officers"
      component={Officers}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Conductor"
      component={Conductor}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Coach"
      component={Coach}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="ProfileMembers"
      component={ProfileMembers}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Performance"
      component={Performance}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Booking"
      component={Booking}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Home"
      component={Home}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="History"
      component={History}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Awards"
      component={Awards}
      options={{headerShown: false}}/>
  </Stack.Navigator>
  );
};

export default Router;
