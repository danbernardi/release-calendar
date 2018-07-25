import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  sectionTitle: {
    ...pageMargins,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#fff'
  }
});
