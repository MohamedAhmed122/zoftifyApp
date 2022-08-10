import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParams, AppParamsList} from './type';
import {HomeScreen} from '../screen/HomeScreen';
import {PostTask} from '../screen/PostTaskScreen';
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
        name={AppParams.PostTask}
        component={PostTask}
        options={{}}
      />
    </Stack.Navigator>
  );
};
