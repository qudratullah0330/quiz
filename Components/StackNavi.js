import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import FindScreen from '../Screen/FindScreen'

const Stack=createStackNavigator()

export default function StackNavi() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='FindScreen' component={FindScreen}options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
