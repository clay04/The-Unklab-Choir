/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsPages, Menu, Songs, SongsPlay, Merchandise, Members, Awards, Booking, History, Performances, Payment, Content, Audition, Schedule} from '../pages';
import { audition } from '../assets/image';
import {AlbumsPages, Altos, Basses, Booking, Coach, Conductor, History, Home, Login, Members, MembersMenu, Menu, Officers, Performance, ProfileMembers, Songs, SongsPlay, Sopranos, Splash, Tenors, Awards, Merchandise, Schedule, PerformanceContents, Audition} from '../pages';


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
        name="Audition"
        component={Audition}
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
      <Stack.Screen 
      name="Merchandise"
      component={Merchandise}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Schedule"
      component={Schedule}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="PerformanceContent"
      component={PerformanceContents}
      options={{headerShown: false}}/>
      <Stack.Screen 
      name="Audition"
      component={Audition}
      options={{headerShown: false}}/>
  </Stack.Navigator>
  );
};

export default Router;
