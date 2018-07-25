import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  body: {
    flex: 2,
    backgroundColor: '#fafafa',
    width: '100%',
    // paddingBottom: 25
  },

  monthPickerButton: {
    paddingTop: 45,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#eaeaea',
    ...pageMargins
  },

  loader: {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    width: '100%',
    ...pageMargins
  },

  picker: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#eee',
    paddingTop: 15
  },

  pickerBtn: {
    alignSelf: 'flex-end',
    ...pageMargins
  }
});
