import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MCard from './MCard';
const { width: screenWidth } = Dimensions.get('window');
import {screens} from '../navigation/RouteItems'

const data = [
  {
    id: 1,
    img: require('../assets/VimaKranti/VimaKranti.png'),
    cardHeader: 'Mission 2047',
    subCardHeader: `Every Indian Must Be Insured Be a Part to Develop Our Nation`,
    btnText: "Click here to participate",
    navigateTo: screens.Mission2047,
  },{
    id: 2,
    img: require('../assets/SiddhiAssociatesIcon/SiddhiAssociatesIcon.png'),
    cardHeader: 'SIDDHI ASSOCAITES',
    subCardHeader: `All Financial Services Under One Roof`,
    btnText: "Click to know about products",
    navigateTo: screens.SiddhiStack,
  },{
    id: 3,
    img: require('../assets/RiddhiLadyWingIcon/RiddhiLadyWingIcon.png'),
    cardHeader: 'RIDDHI’S LADY WING',
    subCardHeader: `Get Free Home Delivery of Sanitary Napkins , Baby & Adult Diapers , Many More`,
    btnText: "Click to know about products",
    navigateTo: screens.RiddhiStack,
  },
];

export default class MCarousel extends React.Component {
  state = {
    activeSlide: 0,
  };

  navigateToPage = (navigateTo) => {
    this.props.navigation.navigate(navigateTo)
  }

  renderCarouselItem = ({ item }) => (
    <MCard {...item} navigateToPage={this.navigateToPage} />
  );

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={data}
          renderItem={this.renderCarouselItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 40}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    margin: 0,
    paddingTop: 12,
    paddingBottom: 0
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#4D1048',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#988282',
  },
});
