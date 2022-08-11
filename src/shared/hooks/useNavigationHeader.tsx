import React, {useLayoutEffect} from 'react';
import {Pressable} from 'react-native';

import {AppNavigationType} from '@Navigation/type';
import {useNavigation} from '@react-navigation/native';
import {CustomText} from '@Shared/common';
import Icon from 'react-native-vector-icons/AntDesign';

export const useNavigationHeader = (isEditScreen: boolean) => {
  const navigation = useNavigation<AppNavigationType>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <CustomText fontType="title">
          {isEditScreen ? 'Edit Post' : 'Create New Post'}
        </CustomText>
      ),
      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <Icon name="arrowleft" size={20} />
        </Pressable>
      ),
    });
  }, [navigation]);
};
