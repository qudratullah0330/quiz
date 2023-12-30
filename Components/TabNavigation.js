import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screen/HomeScreen'
import DonationScreen from '../Screen/DonationScreen'
import FindScreen from '../Screen/FindScreen'
import ProfileScreen from '../Screen/ProfileScreen'
import CreateRequste from '../Screen/CreateRequste'
import { Image, View,Text, TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native'
const Tab=createBottomTabNavigator()
export default function TabNavigation() {

  const CostumeButtom=({children,props})=>(
    <TouchableOpacity style={{bottom:25,alignItems:'center',justifyContent:'center'}}
    onPress={props}>

      <View style={{width:80,height:80,backgroundColor:'#f2f3f5',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
       <View style={{width:70,height:70,borderRadius:35,backgroundColor:'white',
      alignItems:'center',justifyContent:'center'}}>
             <View style={{width:60,height:60,backgroundColor:'#B50102',borderRadius:30}}>
             {children}
             </View>
       </View></View> 
      
    </TouchableOpacity>
  )

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
      
      tabBarStyle:{
        position:'absolute',
        right:0,left:0,
        borderTopRightRadius:20,borderTopLeftRadius:20,
        elevation:4,
        borderWidth:1,
        height:55,
        backgroundColor:'#B50102'
        
      }
    }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false,
        tabBarIcon:({focused})=>(
             <View>
              <Image resizeMode='contain' source={require('../Img/inputIcon/img1.png')} 
              style={{width:25,height:25,tintColor:focused?'white':'#a1a3a6'}}/>
                 {focused? <View style={{width:4,height:4,backgroundColor:focused?'white':null,marginLeft:11}}></View>:null}
             </View>
  )}}
        
        />
        <Tab.Screen name='FindScreen' component={FindScreen} options={{headerShown:false,
         tabBarIcon:({focused})=>(
          <View>
          <Image resizeMode='contain' source={require('../Img/inputIcon/img2.png')} 
          style={{width:25,height:25,tintColor:focused?'white':'#a1a3a6'}}/>
             {focused? <View style={{width:4,height:4,backgroundColor:focused?'white':null,marginLeft:11}}></View>:null}
         </View>
)}}/>
        <Tab.Screen name='Test' component={CreateRequste} options={{headerShown:false,
          tabBarIcon:({focused})=>(
        
             <Image resizeMode='contain' source={require('../Img/inputIcon/img6.png')} 
             style={{width:35,height:35,tintColor:'white'}}/>
            
            
  ),
  tabBarButton:(props)=>(
    <CostumeButtom {...props}/>
  )}}/>
        <Tab.Screen name='Donation Request' component={DonationScreen} options={{headerShown:false,
         tabBarIcon:({focused})=>(
          <View>
          <Image resizeMode='contain' source={require('../Img/inputIcon/img4.png')} 
          style={{width:25,height:25,tintColor:focused?'white':'#a1a3a6'}}/>
             {focused? <View style={{width:4,height:4,backgroundColor:focused?'white':null,marginLeft:11}}></View>:null}
         </View>
)}}/>
        <Tab.Screen name='ProfileScreen'component={ProfileScreen} options={{headerShown:false,
         tabBarIcon:({focused})=>(
          <View>
          <Image resizeMode='contain' source={require('../Img/inputIcon/img5.png')} 
          style={{width:25,height:25,tintColor:focused?'white':'#a1a3a6'}}/>
             {focused? <View style={{width:4,height:4,backgroundColor:focused?'white':null,marginLeft:11}}></View>:null}
         </View>
)}}/>
    </Tab.Navigator>
  )
}
