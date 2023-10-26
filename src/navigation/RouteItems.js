import * as React from 'react'
import { StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  BookStack: 'BookStack',
  Book: 'Book',
  ContactStack: 'ContactStack',
  Contact: 'Contact',
  SiddhiStack: 'SiddhiStack', 
  SiddhiAssociates: 'SiddhiAssociates',
  RiddhiStack: 'RiddhiStack', 
  RiddhiLady: 'RiddhiLady',
  MvvStack: 'MvvStack', 
  MvvManch: 'MvvManch',
  MyRewardsStack: 'MyRewardsStack',
  MyRewards: 'MyRewards',
  LocationsStack: 'LocationsStack',
  Locations: 'Locations',
  EducationQualification: 'EducationQualification',
  ProfessionalProfile: 'ProfessionalProfile',
  SocialProfile: 'SocialProfile',
  KnowTheMan: 'KnowTheMan',
  ContactUs: 'ContactUs',
  Mission2047: 'Mission2047',
  SendFeedback: 'SendFeedback',
  LoginPage: 'LoginPage',
  ProfilePage: 'ProfilePage',
}

const styles = StyleSheet.create({
  wh24: {
    width: 24,
    height: 24
  }
})

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/homeIcon/homeIcon.png')} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/homeIcon/homeIcon.png')} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.BookStack,
    focusedRoute: screens.BookStack,
    title: 'Book Room',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/siddiAssoIcon/siddiAssoIcon.png')} />,
  },
  {
    name: screens.Book,
    focusedRoute: screens.BookStack,
    title: 'Book Room',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/siddiAssoIcon/siddiAssoIcon.png')} />,
  },

  {
    name: screens.SiddhiStack,
    focusedRoute: screens.SiddhiStack,
    title: 'SIDDHI ASSOCIATES',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/siddiAssoIcon/siddiAssoIcon.png')} />,
  },
  {
    name: screens.SiddhiAssociates,
    focusedRoute: screens.SiddhiStack,
    title: 'SIDDHI ASSOCIATES',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/siddiAssoIcon/siddiAssoIcon.png')} />,
  },

  {
    name: screens.RiddhiStack,
    focusedRoute: screens.RiddhiStack,
    title: 'RIDDHI’S LADY WING',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/riddhiIcon/riddhiIcon.png')} />,
  },
  {
    name: screens.RiddhiLady,
    focusedRoute: screens.RiddhiStack,
    title: 'RIDDHI’S LADY WING ',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/riddhiIcon/riddhiIcon.png')} />,
  },

  {
    name: screens.MvvStack,
    focusedRoute: screens.MvvStack,
    title: 'MADHYAMVARGIYA VIKAS MANCH ',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/mvvIcon/mvvIcon.png')} />,
  },
  {
    name: screens.MvvManch,
    focusedRoute: screens.MvvStack,
    title: 'MADHYAMVARGIYA VIKAS MANCH ',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <Image style={styles.wh24} source={require('../assets/mvvIcon/mvvIcon.png')} />,
  },
  {
    name: screens.KnowTheMan,
    focusedRoute: screens.KnowTheMan,
    title: 'KNOW THE MAN',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.ContactUs,
    focusedRoute: screens.ContactUs,
    title: 'CONTACT US',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.SendFeedback,
    focusedRoute: screens.SendFeedback,
    title: 'Feedback',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.LoginPage,
    focusedRoute: screens.LoginPage,
    title: 'Login page',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.ProfilePage,
    focusedRoute: screens.ProfilePage,
    title: 'Profile',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Mission2047,
    focusedRoute: screens.Mission2047,
    title: 'MISSION 2047',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
]
