import {Text, View} from 'react-native';
import React from 'react';
import {AppNavigationType} from '@Navigation/type';

interface Props {
  navigation: AppNavigationType;
}

export const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
