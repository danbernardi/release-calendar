import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  entry: {
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 1,
    ...pageMargins
  },

  platform: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ddd',
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 12
  }
});
