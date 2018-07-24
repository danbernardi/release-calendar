import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#eee',
    paddingTop: 40,
    paddingBottom: 20,
    ...pageMargins
  }
});
