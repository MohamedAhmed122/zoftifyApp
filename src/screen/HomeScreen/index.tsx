import {Button, View} from 'react-native';
import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/type';
import {CustomBadge, CustomInput, CustomText} from '@Shared/common';
import {CustomButton} from '@Shared/common/CustomButton';

interface Props {
  navigation: AppNavigationType;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <CustomText fontType="title">Mohamed Ahmed </CustomText>
      <Button
        onPress={() => navigation.navigate(AppParams.CreatePost)}
        title="navigate"
      />
      <CustomInput value="name" />
      <CustomButton title="name" />
      <CustomBadge title="Published" badgeType="isPublished" />
    </View>
  );
};
