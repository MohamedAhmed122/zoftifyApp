import {COLORS} from '@Shared/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen:{
    flexGrow:1,
    paddingBottom: 40,
  },
  container:{
    justifyContent: 'space-between',
    flex:1
  },
  inputsContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  buttonContainer:{
    // marginBottom: 70,
    marginHorizontal: 16,
  },
  descInput:{
    height: 112,
    alignItems:'flex-start',
    paddingTop: 10,
  }
});
