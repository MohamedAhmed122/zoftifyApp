import {Button, Text, View} from 'react-native';
import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/type';
import {CustomText} from '@Shared/common/CustomText';

interface Props {
  navigation: AppNavigationType;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <CustomText fontType="title">Mohamed Ahmed </CustomText>

      <View style={{marginTop: 100}}></View>
      <Button
        onPress={() => navigation.navigate(AppParams.CreatePost)}
        title="navigate"
      />
    </View>
  );
};
