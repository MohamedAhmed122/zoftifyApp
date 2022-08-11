import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParams, AppParamsList} from './type';
import {HomeScreen} from '../screen/HomeScreen';
import {PostTask} from '../screen/PostTaskScreen';
import {PostDetailScreen} from '../screen/PostDetailScreen';
import {Header} from '@Shared/components';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppParams.Home}
        component={HomeScreen}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name={AppParams.PostTask} component={PostTask} />
      <Stack.Screen
        name={AppParams.PostDetail}
        component={PostDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
