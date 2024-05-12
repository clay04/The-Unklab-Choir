/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsPages, Altos, Basses, Coach, Conductor, Members, MembersMenu, Menu, Officers, ProfileMembers, Songs, SongsPlay, Sopranos, Tenors} from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
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
  </Stack.Navigator>
  );
};

export default Router;
