import React, { Component } from 'react';
import { Image, SectionList, View, PickerIOS, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import Entry from '../Entry';
import SectionTitle from '../SectionTitle';
import moment from 'moment';

class Body extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: null,
      triggerMonthSelector: false,
      selectedMonth: 0,
      selectedMonthQueue: 0
    };

    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    this.currentYear = new Date().getFullYear();
  }

  getFetchUrl (monthIndex) {
    const minDateRange = new Date(`${this.months[monthIndex]} 1, ${this.currentYear}`).getTime();
    const maxDateRange = new Date(`${this.months[monthIndex]} 31, ${this.currentYear}`).getTime();
    return `https://api-endpoint.igdb.com/release_dates/?fields=date,game.name,game.cover,platform.slug&limit=50&expand=game,platform&filter[region][eq]=2&filter[date][gte]=${minDateRange}&filter[date][lte]=${maxDateRange}&filter[platform][not_in]=52,41,45,14,3,82,43,39,34,92&order=date:asc`;
  }

  fetchData () {
    const { selectedMonth } = this.state;
    this.setState({ loading: true });

    return fetch(
      this.getFetchUrl(selectedMonth),
      { headers: { 'user-key': '1f5d68f679e98eb1957860ce1130b5c3' } }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson, loading: false });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.selectedMonth !== this.state.selectedMonth) this.fetchData();
  }

  monthSelectionHandler (itemValue) {
    this.setState({ selectedMonthQueue: itemValue });
  }

  render () {
    const { data, selectedMonth, selectedMonthQueue, triggerMonthSelector, loading } = this.state;
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
        <View style={ { display: 'flex' } }>
          <TouchableHighlight style={ styles.monthPickerButton } onPress={ () => this.setState({ triggerMonthSelector: !triggerMonthSelector }) }>
            <Text style={ { color: '#416788', fontWeight: 'bold', fontSize: 15 } }>Game releases in { `${this.months[selectedMonth]} ${new Date().getFullYear()}` }</Text>
          </TouchableHighlight>
          <Image style={ { position: 'absolute', top: 52, right: 25 } } source={ require('../../assets/caret_down.png') } />
        </View>

        { loading
          ? <Text style={ styles.loader }>Loading</Text>
          : <SectionList
            ref={ el => { this.sectionList = el; } }
            sections={ sections }
            renderItem={ ({ item }) => <Entry { ...item } /> }
            renderSectionHeader={ ({ section: { title } }) => <SectionTitle title={ moment(title).format('dddd, MMM D') } /> }
            keyExtractor={ (item, index) => item + index }
          />
        }

        { triggerMonthSelector &&
          <View style={ styles.picker }>
            <TouchableHighlight
              style={ styles.pickerBtn }
              onPress={ () => this.setState({ selectedMonth: selectedMonthQueue, triggerMonthSelector: false }) }
              underlayColor="pink"
            >
              <Text style={ { color: '#416788', fontWeight: 'bold' } }>Done</Text>
            </TouchableHighlight>
            <PickerIOS
              selectedValue={ selectedMonthQueue }
              onValueChange={ (itemValue) => this.monthSelectionHandler(itemValue) }
            >
              { this.months.map((month, index) => (
                <PickerIOS.Item key={ index } label={ month } value={ index } />
              )) }
            </PickerIOS>
          </View>
        }
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
