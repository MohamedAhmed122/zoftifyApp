import {View, ViewProps} from 'react-native';
import React from 'react';
import {CustomText} from '../CustomText';
import {styles} from './styles';
import {COLORS} from '@Shared/style';

interface CustomBadgeProps extends ViewProps {
  title: string;
  badgeType: 'isDrafted' | 'isPublished';
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
        badgeType === 'isDrafted' && {backgroundColor: COLORS.lightRed},
        badgeType === 'isPublished' && {backgroundColor: COLORS.lightGreen},
      ]}
      {...otherProps}>
      <CustomText
        fontType="badgeText"
        textStyle={[
          badgeType === 'isDrafted' && {color: COLORS.danger},
          badgeType === 'isPublished' && {color: COLORS.green},
        ]}>
        {title}
      </CustomText>
    </View>
  );
};
