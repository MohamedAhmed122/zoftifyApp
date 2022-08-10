import {COLORS} from '@Shared/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.darkGrey,
    marginTop: 18,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  closeIconContainer:{
      position:'absolute',
      top:-1,
      right:-1,
      borderColor: COLORS.white,
      borderWidth: 3,
      borderRadius: 50,
  }
});
