import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';
import styles from './styles';

function SectionTitle ({ title }) {
  return (
    <View style={ styles.sectionTitle }><Text style={ { fontWeight: 'bold' } }>{ title }</Text></View>
  );
}

SectionTitle.propTypes = {
  title: string
};

export default SectionTitle;
