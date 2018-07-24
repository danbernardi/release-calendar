import { StyleSheet } from 'react-native';
import { pageMargins } from '../../styles/mixins';

export default StyleSheet.create({
  sectionTitle: {
    ...pageMargins,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 40,
    paddingBottom: 10
  }
});
