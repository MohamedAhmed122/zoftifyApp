import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CustomText} from '../CustomText';
import {style} from './styles';

const {pickerItemStyle: styles} = style;

interface PickerItemProps {
  label: string;
  color: string;
  textColor: string;
  onPress(): void;
}

export const PickerItem: React.FC<PickerItemProps> = ({
  label,
  color,
  textColor,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.pickerContainer, {backgroundColor: color}]}>
        <CustomText
          fontType="body"
          textStyle={[styles.PickerText, {color: textColor}]}>
          {label}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};
