import {View, ViewProps} from 'react-native';
import React from 'react';
import {CustomText} from '../CustomText';
import {styles} from './styles';
import {COLORS} from '@Shared/style';
import {StatusEnum, StatusType} from '@Shared/types';

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
        badgeType === StatusEnum.IsDrafted && {
          backgroundColor: COLORS.lightRed,
        },
        badgeType === StatusEnum.IsPublished && {
          backgroundColor: COLORS.lightGreen,
        },
      ]}
      {...otherProps}>
      <CustomText
        fontType="badgeText"
        textStyle={[
          badgeType === StatusEnum.IsDrafted && {color: COLORS.danger},
          badgeType === StatusEnum.IsPublished && {color: COLORS.green},
        ]}>
        {title}
      </CustomText>
    </View>
  );
};
