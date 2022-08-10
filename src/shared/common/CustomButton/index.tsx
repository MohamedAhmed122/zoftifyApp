import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../CustomText';

import {styles} from './styles';

interface CustomButtonProps
  extends Omit<TouchableOpacityProps, 'style' | 'disabled'> {
  title: string;
  isDisabled?: boolean;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonContainerStyle,
  isDisabled = false,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isDisabled && styles.buttonDisabled,
        buttonContainerStyle,
      ]}
      disabled={isDisabled}
      {...otherProps}>
      <CustomText fontType="buttonText">{title}</CustomText>
    </TouchableOpacity>
  );
};
