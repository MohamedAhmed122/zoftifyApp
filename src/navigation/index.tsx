import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParams, AppParamsList} from './type';
import {HomeScreen} from '../screen/HomeScreen';
import {CreatePost} from '../screen/CreatePostScreen';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // header: Header,
        }
      }>
      <Stack.Screen
        name={AppParams.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={AppParams.CreatePost} component={CreatePost} />
    </Stack.Navigator>
  );
};
