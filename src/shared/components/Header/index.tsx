import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('@Shared/assets/image/Logo.png')}
      />
    </View>
  );
};
