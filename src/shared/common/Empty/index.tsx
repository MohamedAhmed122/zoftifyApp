import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomText} from '../CustomText';

export const Empty: React.FC<{msg?: string}> = ({
  msg = 'The Current List is Empty',
}) => {
  return (
    <View style={styles.container}>
      <CustomText fontType="title">{msg}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
