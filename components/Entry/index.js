import React from 'react';
import { View, Text, Image } from 'react-native';
import { object, number } from 'prop-types';
import { getPlatform } from '../../utils/dataUtils';
import styles from './styles';
import moment from 'moment';

function Entry (props) {
  const { game, date, platform } = props;

  console.log(props);

  return (
    <View style={ styles.entry }>
      <Image source={ { uri: game.cover ? game.cover.url : '' } } style={ { width: 31, height: 43, marginRight: 20, overflow: 'visible' } } />
      <View>
        <Text numberOfLines={ 1 } style={ { fontWeight: 'bold', marginBottom: 5 } }>{ game.name }</Text>
        <Text>{ moment(date).format('MMMM D') }</Text>
      </View>
      <Text style={ styles.platform }>{ getPlatform(platform.slug) }</Text>
    </View>
  );
}

Entry.propTypes = {
  date: number,
  game: object,
  platform: object
};

export default Entry;
