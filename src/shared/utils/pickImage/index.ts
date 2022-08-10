import {Alert} from 'react-native';
import ImagePicker, {Image} from 'react-native-image-crop-picker';

export const pickImage = async (): Promise<Image | undefined> => {
  try {
    return await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    });
  } catch (error) {

    const errorMsg =
      typeof error === 'string'
        ? error
        : 'error occurred during picking image, please try again later';
        
    Alert.alert('Error', errorMsg);
  }
};
