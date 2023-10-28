import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../RouteItems';
import MCard from '../../components/MCard';
import EducationQualification from '../../screens/EducationQualification';
import ProfessionalProfile from '../../screens/ProfessionalProfile';
import SocialProfile from '../../screens/SocialProfile';
import MModal from '../../components/MModal';
import MLinking from '../../components/MLinking';
import MCarousel from '../../components/MCarousel';
import MLandingHeader from '../../components/MLandingHeader';
import {WebView} from 'react-native-webview';

const mCards = [
  {
    id: 1,
    img: require('../../assets/vimaKrantiSmall.png'),
    cardHeader: 'Mission 2047',
    subCardHeader: `Every Indian Must Be Insured Be a Part to Develop Our Nation`,
    btnText: 'Click here to participate',
  },
  {
    id: 2,
    img: require('../../assets/siddhiAsso.png'),
    cardHeader: 'SIDDHI ASSOCAITES',
    subCardHeader: `All Financial Services Under One Roof`,
    btnText: 'Click to know about products',
  },
  {
    id: 3,
    img: require('../../assets/RiddhiLady.png'),
    cardHeader: 'RIDDHI’S LADY WING',
    subCardHeader: `Get Free Home Delivery of Sanitary Napkins , Baby & Adult Diapers , Many More`,
    btnText: 'Click to know about products',
  },
];
const aboutPages = [
  {
    text: 'Education Qualification',
    navigationText: 'EducationQualification',
  },
  {
    text: 'Professional Profile',
    navigationText: 'ProfessionalProfile',
  },
  {
    text: 'Social Profile',
    navigationText: 'SocialProfile',
  },
];
const mustWatchImg = require('../../assets/mustWatch/mustWatch.png');
const rightIcon = require('../../assets/rightIcon.png');
const youtube1 = require('../../assets/youtube1.png');
const youtube2 = require('../../assets/youtube2.png');
const youtubeUrl1 =
  'https://www.youtube.com/watch?v=of7rgBIiNe8&pp=ygUSbWlsaW5kIHNhbXBnYW9ua2Fy';
const youtubeUrl2 = 'https://www.youtube.com/watch?v=R4hUaOH_MIQ';
const seeMoreUrl = 'https://www.youtube.com/@drmilindsampgaonkar5712/videos';

const Stack = createStackNavigator();

const Home = ({navigation}) => (
  <ScrollView ref={ref => (this.scrollViewRef = ref)}>
    <MLandingHeader navigation={navigation} />
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 22,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 22,
        backgroundColor: '#FBEAFF',
      }}>
      <MCarousel navigation={navigation} />
      {/* {mCards.map((mCard) => <MCard {...mCard} />)} */}
      {/* <View style={{width: "100%", height: 1500,}}>
        <WebView
          source={{ uri: 'https://www.esakal.com' }} // Replace with your desired URL
          style={styles.webview}
        />
      </View> */}
      <View style={styles.mustWatchWrapper}>
        <View style={styles.mustWatch}>
          <Image style={styles.image} source={mustWatchImg} />
          <Text style={styles.mustWatchText}>Must Watch</Text>
        </View>
        <MLinking url={seeMoreUrl}>
          <Text style={styles.seeMoreText}>See more</Text>
        </MLinking>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <MLinking url={youtubeUrl1}>
          <Image style={styles.ytImage} source={youtube1} />
        </MLinking>
        <MLinking url={youtubeUrl2}>
          <Image style={styles.ytImage} source={youtube2} />
        </MLinking>
      </View>
      <Text style={styles.headerText2}>About Dr Milind Sampgaonkar</Text>
      {aboutPages.map((aboutPage, aIndex) => {
        const {text, navigationText} = aboutPage;
        return (
          <Pressable
            key={`aboutPage-${navigationText}`}
            style={{marginTop: 22}}
            onPress={() => navigation.navigate(navigationText)}>
            <View style={styles.aboutPWrapper}>
              <Text style={styles.text_16_500}>{text}</Text>
              <Image style={styles.rightIcon} source={rightIcon} />
            </View>
          </Pressable>
        );
      })}
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 24,
    height: 24,
  },
  mustWatchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 22,
  },
  mustWatch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mustWatchText: {
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#4D1048',
  },
  seeMoreText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    color: '#4D1048',
  },
  headerText2: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 22,
    color: '#4D1048',
  },
  aboutPWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4D1048',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 7,
    backgroundColor: '#FFFFFF',
  },
  rightIcon: {
    width: 11.62,
    height: 20,
    resizeMode: 'contain',
  },
  text_16_500: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1C1B1F',
  },
  ytImage: {
    width: 146,
    height: 98,
  },
});

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Home} component={Home} />
      <Stack.Screen
        name={screens.EducationQualification}
        component={EducationQualification}
      />
      <Stack.Screen
        name={screens.ProfessionalProfile}
        component={ProfessionalProfile}
      />
      <Stack.Screen name={screens.SocialProfile} component={SocialProfile} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
