import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  entry: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 1,
    ...pageMargins
  },

  platform: {
    backgroundColor: '#eee',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    fontSize: 12,
    height: 25,
    borderRadius: 25
  }
});
