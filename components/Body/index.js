import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import Entry from '../Entry';
import SectionTitle from '../SectionTitle';

class Body extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount () {
    return fetch(
      'https://api-endpoint.igdb.com/release_dates/?fields=y,m,date,game.name,game.cover,platform.slug&limit=50&expand=game,platform&filter[region][eq]=2&filter[y][eq]=2018&filter[m][eq]=1&filter[platform][not_in]=14,3,82,43,39,34,92&order=date:asc',
      { headers: { 'user-key': '1f5d68f679e98eb1957860ce1130b5c3' } }
    )
      .then(response => response.json())
      .then(responseJson => {
        const filteredRespnose = responseJson.filter(data => new Date(data.date).getFullYear() === 2018);
        this.setState({ data: filteredRespnose });
      })
      .catch((error) => console.log(error));
  }

  render () {
    const { data } = this.state;
    // if (data) {
    //   data.filter((item) => { debugger; return new Date(item.date).getFullYear() === 2018; });
    // }
    console.log(data);

    return (
      <View style={ styles.body }>
        <SectionTitle title="January" />
          <FlatList
            data={ data }
            renderItem={ ({ item }) => <Entry { ...item } /> }
            keyExtractor={ (item, index) => item + index }
          />
      </View>
    );
  }
}

export default Body;
