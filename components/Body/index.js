import React, { Component } from 'react';
import { SectionList, FlatList, View } from 'react-native';
import styles from './styles';
import Entry from '../Entry';
import SectionTitle from '../SectionTitle';
import moment from 'moment';

class Body extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount () {
    return fetch(
      'https://api-endpoint.igdb.com/release_dates/?fields=y,m,date,game.name,game.cover,platform.slug&limit=50&expand=game,platform&filter[region][eq]=2&filter[date][gt]=1514793600000&filter[m][eq]=9&filter[platform][not_in]=52,41,45,14,3,82,43,39,34,92&order=date:asc',
      { headers: { 'user-key': '1f5d68f679e98eb1957860ce1130b5c3' } }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson });
      })
      .catch((error) => console.log(error));
  }

  render () {
    const { data } = this.state;
    // if (data) {
    //   data.filter((item) => { debugger; return new Date(item.date).getFullYear() === 2018; });
    // }
    const sections = [];

    if (data) {
      // Categorize data into sections by release date
      data.forEach((point, index) => {
        const dataPoint = sections.find(d => d.title === point.date);
        if (dataPoint) {
          dataPoint.data.push(point);
        } else {
          sections.push({ title: point.date, data: [point] });
        }
      });

      // Sort data alphabetically by game name
      sections.forEach((section) => {
        section.data.sort(sortByName);
      });
    }

    return (
      <View style={ styles.body }>
          <SectionList
            sections={ sections }
            renderItem={ ({ item }) => <Entry { ...item } /> }
            renderSectionHeader={ ({ section: { title } }) => <SectionTitle title={ moment(title).format('dddd, MMMM D') } /> }
            keyExtractor={ (item, index) => item + index }
          />
      </View>
    );
  }
}

function sortByName (a, b) {
  let comparison = 0;

  if (a.game.name > b.game.name) {
    comparison = 1;
  } else if (b.game.name > a.game.name) {
    comparison = -1;
  }

  return comparison;
}

export default Body;
