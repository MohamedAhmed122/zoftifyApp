import { COLORS } from '@Shared/style';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.gray,
    height: 58,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  leftIconContainer: {
    marginLeft: 15,
  },
  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    fontFamily:'Lato-Regular',
    flex: 1,
  },
  rightIconContainer: {
    marginRight: 15,
  },
});
