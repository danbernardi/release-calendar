import React from 'react';
import { View, Text, Image } from 'react-native';
import { object, number } from 'prop-types';
import { getPlatform } from '../../utils/dataUtils';
import styles from './styles';
import moment from 'moment';

function Entry (props) {
  const { game, date, platform } = props;

  const coverSrc = (game.cover) ? `https://images.igdb.com/igdb/image/upload/t_cover_small_2x/${game.cover.cloudinary_id}.jpg` : 'https://s3-us-west-1.amazonaws.com/release-calendar/public/cover_placeholder.png';

  return (
    <View style={ styles.entry }>
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        source={ { uri: coverSrc } }
        style={ { width: 31,  height: 43, marginRight: 20, overflow: 'visible' } }
      />
      <View style={ { flex: 1, marginRight: 20 } }>
        <Text numberOfLines={ 2 } style={ { fontWeight: 'bold', marginBottom: 5, lineHeight: 22 } }>{ game.name }</Text>
        <Text>{ `(${getPlatform(platform.slug)})` }</Text>
      </View>
    </View>
  );
}

Entry.propTypes = {
  date: number,
  game: object,
  platform: object
};

export default Entry;
