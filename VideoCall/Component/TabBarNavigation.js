import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import UserScreen from '../Screen/UserScreen/UserScreen'
import ChatList from '../Screen/UserScreen/ChatList'
import CallList from '../Screen/CallScreen/CallList'
import LastScreen from '../Screen/LastScreen/LastScreen'

const Tab=createBottomTabNavigator()

export default function TabBarNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name='UserScreen' component={UserScreen} options={{headerShown:false}}/>
   
        <Tab.Screen name='ChatList' component={ChatList} options={{headerShown:false}}/>
        
        <Tab.Screen name='CallList' component={CallList} options={{headerShown:false}}/>
        <Tab.Screen name='LastScreen' component={LastScreen} options={{headerShown:false}}/>
 
    </Tab.Navigator>
    
  )
}
