import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, View } from 'react-native'

import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import BookStackNavigator from './stack-navigators/BookStackNavigator'
import ContactStackNavigator from './stack-navigators/ContactStackNavigator'
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator'
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator'
import KnowTheMan from '../screens/KnowTheMan'
import ContactUs from '../screens/ContactUs'
import Mission2047 from '../screens/Misson2047'
import SendFeedback from '../screens/SendFeedback'
import LoginPage from '../screens/LoginPage'
import ProfilePage from '../screens/ProfilePage'
import { routes, screens } from './RouteItems'
import SiddhiAssociates from '../screens/SiddhiAssociates'
import RiddhiLady from '../screens/RiddhiLady'
import MvvManch from '../screens/MvvManch'

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name)

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    }
  }

  return {
    tabBarIcon: ({ focused }) => (<View style={styles.tabIcon}>
      {item.icon(focused)}
    </View>),
    tabBarLabel: () => null,
    // (
    //   <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    // ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      {/* <Tab.Screen name={screens.BookStack} component={BookStackNavigator} /> */}
      <Tab.Screen name={screens.SiddhiStack} component={SiddhiAssociates} />
      <Tab.Screen name={screens.RiddhiStack} component={RiddhiLady} />
      <Tab.Screen name={screens.MvvStack} component={MvvManch} />
      <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator} />
      <Tab.Screen name={screens.KnowTheMan} component={KnowTheMan} />
      <Tab.Screen name={screens.Mission2047} component={Mission2047} />
      <Tab.Screen name={screens.SendFeedback} component={SendFeedback} />
      <Tab.Screen name={screens.LoginPage} component={LoginPage} />
      <Tab.Screen name={screens.ProfilePage} component={ProfilePage} />
      <Tab.Screen name={screens.ContactUs} component={ContactUs} />

      <Tab.Screen name={screens.MyRewardsStack} component={MyRewardsStackNavigator} />
      <Tab.Screen name={screens.LocationsStack} component={LocationsStackNavigator} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 56,
    backgroundColor: '#4D1048', 
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    paddingTop: 6,
    paddingBottom: 5
  },
  tabIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    marginTop: 6,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BottomTabNavigator
