import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SiddhiAssociates from '../../screens/SiddhiAssociates' 
import RiddhiAssociates from '../../screens/RiddhiLady'
import MvvManch from '../../screens/MvvManch'

import { screens } from '../RouteItems'

const Stack = createStackNavigator()


const SiddhiStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.SiddhiAssociates} component={SiddhiAssociates} />
    </Stack.Navigator>
  )
}

export default SiddhiStackNavigator
