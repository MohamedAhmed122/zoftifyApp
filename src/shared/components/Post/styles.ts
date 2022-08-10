import {COLORS} from '@Shared/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  post: {
    backgroundColor: COLORS.white,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginTop: 12,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 12,
    marginRight: 16,
  },
  title: {
    marginTop: 8,
  },
  textStyle: {
    marginBottom: 12,
  },
  descStyle: {
    marginHorizontal: 4,
    marginTop: 16,
  },
});
