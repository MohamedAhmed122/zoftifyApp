import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {Post as PostType, PostStatus} from '@Shared/types';
import {CustomBadge, CustomText} from '@Shared/common';
import dayjs from 'dayjs';
import {styles} from './styles';

interface Props extends TouchableOpacityProps {
  item: PostType;
}

export const Post: React.FC<Props> = ({item, ...otherProps}) => {
  const {createdAt, title, desc, image, status} = item;

  const date = dayjs(createdAt).format('MM/DD/YY hh:mm a');

  return (
    <TouchableOpacity style={styles.post} {...otherProps}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <CustomText
            fontType="title"
            textStyle={[styles.textStyle, styles.title]}>
            {title}
          </CustomText>
          <CustomText fontType="subtitle" textStyle={styles.textStyle}>
            Created at:{' '}
            <CustomText fontType="body" textStyle={styles.textStyle}>
              {date}
            </CustomText>
          </CustomText>
          <CustomBadge
            badgeType={status}
            title={status === PostStatus.IsDrafted ? 'Draft' : 'Published'}
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
