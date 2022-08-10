import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {COLORS} from '@Shared/style';
import {styles} from './styles';

interface Props {
  uri?: string;
  onPickImage(): void;
  onRemoveImage(): void;
}

export const PhotoPicker: React.FC<Props> = ({
  uri,
  onPickImage,
  onRemoveImage,
}) => {
  if (uri)
    return (
      <View style={styles.container}>
        <Image source={{uri}} resizeMode="cover" style={styles.image} />
        <View style={styles.closeIconContainer}>
          <Icon
            name="closecircle"
            color={COLORS.main}
            size={24}
            onPress={onRemoveImage}
          />
        </View>
      </View>
    );
  else
    return (
      <TouchableOpacity style={styles.container} onPress={onPickImage}>
        <Icon name="pluscircleo" color={COLORS.textSecondary} size={26} />
      </TouchableOpacity>
    );
};
