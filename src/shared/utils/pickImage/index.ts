import {Alert} from 'react-native';
import ImagePicker, {Image} from 'react-native-image-crop-picker';

export const pickImage = async (): Promise<Image | undefined> => {
  try {
    return await ImagePicker.openPicker({
      width: 800,
      height: 800,
      cropping: true,
      compressImageMaxWidth: 800,
      compressImageMaxHeight: 800,
      compressImageQuality: 0.5,
      includeExif: true,
      mediaType: 'photo',
      forceJpg: true,
      smartAlbums: [
        'PhotoStream',
        'Generic',
        'UserLibrary',
        'LivePhotos',
        'RecentlyAdded',
      ],
    });
  } catch (error) {

    const errorMsg =
      typeof error === 'string'
        ? error
        : 'error occurred during picking image, please try again later';
        
    Alert.alert('Error', JSON.stringify(error));
  }
};
