import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header />
        <Body />
      </View>
    );
  }
}
