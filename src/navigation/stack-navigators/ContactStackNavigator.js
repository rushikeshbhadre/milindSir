import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MvvManch from '../../screens/MvvManch'

import { screens } from '../RouteItems'

const Stack = createStackNavigator()


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Contact} component={MvvManch} />
    </Stack.Navigator>
  )
}

export default ContactStackNavigator
