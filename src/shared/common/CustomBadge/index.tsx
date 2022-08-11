import {View, ViewProps} from 'react-native';
import React from 'react';
import {CustomText} from '../CustomText';
import {styles} from './styles';
import {COLORS} from '@Shared/style';
import {PostStatus, StatusType} from '@Shared/types';

interface CustomBadgeProps extends ViewProps {
  title: string;
  badgeType: StatusType;
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({
  title,
  badgeType,
  ...otherProps
}) => {
  return (
    <View
      style={[
        styles.badge,
        badgeType === PostStatus.IsDrafted && {
          backgroundColor: COLORS.lightRed,
        },
        badgeType === PostStatus.IsPublished && {
          backgroundColor: COLORS.lightGreen,
        },
      ]}
      {...otherProps}>
      <CustomText
        fontType="badgeText"
        textStyle={[
          badgeType === PostStatus.IsDrafted && {color: COLORS.danger},
          badgeType === PostStatus.IsPublished && {color: COLORS.green},
        ]}>
        {title}
      </CustomText>
    </View>
  );
};
