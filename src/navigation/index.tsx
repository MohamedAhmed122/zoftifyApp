import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParams, AppParamsList} from './type';
import {HomeScreen} from '../screen/HomeScreen';
import {CreatePost} from '../screen/CreatePostScreen';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name={AppParams.Home} component={HomeScreen} options={{}} />
      <Stack.Screen
        name={AppParams.CreatePost}
        component={CreatePost}
        options={{}}
      />
    </Stack.Navigator>
  );
};
