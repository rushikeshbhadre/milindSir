import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';

import BottomTabNavigator from './BottomTabNavigator';
import {routes, screens} from './RouteItems';
const whiteDrawerIcon = require('../assets/whiteDrawerIcon/whiteDrawerIcon.png');
const whiteProfileIcon = require('../assets/whiteProfileIcon/whiteProfileIcon.png');

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: Dimensions.get('window').width,
          maxWidth: 293,
          height: 56,
          backgroundColor: '#4D1048',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.toggleDrawer()}
          style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 24}}>
          <Image style={styles.wh24} source={whiteDrawerIcon} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '400',
            // lineHeight: 24,
            letterSpacing: 0,
            textAlign: 'left',
            color: '#F6F6F6',
          }}>
          Hi Guest
        </Text>
        <TouchableOpacity
          onPress={() => props.nav()?.navigate('ProfilePage')}
          style={{paddingTop: 16, paddingBottom: 16, paddingRight: 24}}>
          <Image style={styles.wh24} source={whiteProfileIcon} />
        </TouchableOpacity>
      </View>
      {routes
        .filter(route => route.showInDrawer)
        .map(route => {
          const focusedRoute = routes.find(r => r.name === currentRouteName);
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.HomeStack;
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={styles.drawerLabel}>{route.title}</Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({nav}) => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        drawerStyle: {
          width: 293,
          marginTop: -4,
        },
        headerStyle: {
          backgroundColor: '#FBEAFF',
          height: 0,
        },
        headerLeft: () => null,
      })}
      drawerContent={props => <CustomDrawerContent {...props} nav={nav} />}>
      <Drawer.Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          headerTitle: () => null,
          headerRight: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  wh24: {
    width: 24,
    height: 24,
  },
});

export default DrawerNavigator;
