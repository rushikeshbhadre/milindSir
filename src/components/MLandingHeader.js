import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
const drawerIcon = require('../assets/drawerIcon/drawerIcon.png');
const profileIcon = require('../assets/ProfileIcon/ProfileIcon.png');

export default function MLandingHeader({navigation}) {
  return (
    <View style={styles.mHeaderWrapper}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.headerLeft}>
        <Image style={styles.wh24} source={drawerIcon} />
      </TouchableOpacity>
      <View style={styles.flexCol}>
        <Text style={styles.text_700_14}> Welcome ,</Text>
        <Text style={styles.text_700_14}>Let’s find best Products For You</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image style={styles.wh24} source={profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FBEAFF',
  },
  wh24: {
    width: 24,
    height: 24,
  },
  flexCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    marginBottom: 10,
    marginLeft: 7,
  },
  text_700_14: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  headerLeft: {
    marginTop: 20,
    marginLeft: 28,
  },
  headerRight: {
    marginRight: 26,
    paddingTop: 20,
  },
});
