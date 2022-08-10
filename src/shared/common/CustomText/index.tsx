import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';

type FontType = 'body' | 'title' | 'caption' | 'subtitle';

interface Props extends Omit<TextProps, 'style'> {
  textStyle?: StyleProp<TextStyle>;
  fontType: FontType;
}

export const CustomText: React.FC<Props> = ({
  fontType,
  textStyle,
  ...otherProps
}) => {
  return (
    <Text
      style={[
        styles.textStyle,
        fontType === 'body' && styles.body,
        fontType === 'title' && styles.title,
        fontType === 'caption' && styles.caption,
        fontType === 'subtitle' && styles.subtitle,
        textStyle,
      ]}
      {...otherProps}
    />
  );
};
