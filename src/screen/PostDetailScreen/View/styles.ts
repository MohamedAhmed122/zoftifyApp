import {COLORS} from '@Shared/style';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  image: {
    flex: 0.5,
    width,
    height: height / 2.2,
    borderBottomRightRadius: 25,
    borderBottomStartRadius: 25,
    marginBottom: 20,
  },
  conatiner: {
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    flex: 1,
  },
  delete: {
    backgroundColor: COLORS.danger,
  },
  editBtn: {
    backgroundColor: COLORS.green,
    // marginBottom: 40,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 45,
  },
});
