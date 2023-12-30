import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigation from './TabNavigation'
import CostumDrawer from './CostumDrawer'
const DR=createDrawerNavigator()
export default function DrwerNavigation() {
  return (
    <DR.Navigator drawerContent={props=><CostumDrawer {...props}/>} screenOptions={{
     drawerStyle:{backgroundColor:'#B50102',}
    }}>
        <DR.Screen name='HomeScreen' component={TabNavigation} options={{headerShown:false,}}/>
    </DR.Navigator>
  )
}
