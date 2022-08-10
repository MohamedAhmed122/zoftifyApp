import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Post as PostType, StatusEnum} from '@Shared/types';
import {CustomBadge, CustomText} from '@Shared/common';

interface Props {
  item: PostType;
}

export const Post: React.FC<Props> = ({item}) => {
  const {createdAt, title, desc, image, status} = item;
  return (
    <TouchableOpacity style={styles.post}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
        <View>
          <CustomText
            fontType="title"
            textStyle={[styles.textStyle, styles.title]}>
            {title}
          </CustomText>
          <CustomText fontType="subtitle" textStyle={styles.textStyle}>
            Created at:{' '}
            <CustomText fontType="body" textStyle={styles.textStyle}>
              {createdAt.toString()}
            </CustomText>
          </CustomText>
          <CustomBadge
            badgeType={status}
            title={status === StatusEnum.IsDrafted ? 'Draft' : 'Published'}
          />
        </View>
      </View>
      <CustomText
        fontType="body"
        textStyle={styles.descStyle}
        numberOfLines={2}>
        {desc}
      </CustomText>
    </TouchableOpacity>
  );
};
