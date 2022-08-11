import {COLORS} from '@Shared/style';
import {StyleSheet} from 'react-native';

const pickerItemStyle = StyleSheet.create({
  pickerContainer: {
    width: '89%',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    marginTop: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  PickerText: {
    marginHorizontal: 10,
  },
});

const pickerStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.gray,
    height: 58,
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    flex: 1,
  },
  label:{
    color:'lightgray'
  },
  modalContainer: {
    marginTop: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});

export const style = {
  pickerItemStyle,
  pickerStyle,
};
