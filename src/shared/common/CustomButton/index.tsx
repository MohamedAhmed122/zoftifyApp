import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../CustomText';

import {styles} from './styles';

interface CustomButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonContainerStyle,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonContainerStyle]}
      {...otherProps}>
      <CustomText fontType="buttonText">{title}</CustomText>
    </TouchableOpacity>
  );
};
