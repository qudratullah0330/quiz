import React, { useState } from 'react'
import { Text, View,StyleSheet, ImageBackground, Image,Modal,TouchableOpacity } from 'react-native'


export default function VideoCall({navigation}) {
    const [selectVideo,setSelectVideo]=useState(false)
    const [micOff,setMicOff]=useState(false)
    const [selfVideoCall,setSelfVideoCall]=useState(false)
    const [show,setShow]=useState(false)
    const [showTwo,setShowTwo]=useState(false)
    const [showThree,setShowThree]=useState(false)
    const VideoCallHandler=()=>{
        setSelectVideo(!selectVideo)
    }

    const micOffHndler=()=>{
        setMicOff(!micOff)
    }

    const selfVideoCallHndler=()=>{
        setSelfVideoCall(!selfVideoCall)
    }
  return (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
        <ImageBackground source={require('../../image/CallingScreen/img9.png')}
         style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>

          <View style={{flex:1,padding:10,flexDirection:'row',alignItems:'flex-start',width:'100%',justifyContent:'space-between',margin:11}}>
          <Image source={require('../../image/CallingScreen/img3.png')}/>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../image/CallingScreen/img3.png')}/>
            <Text style={{color:'white'}}>Pin</Text>
            </View>
          </View>
          <View style={{width:'100%',flexDirection:'row',alignItems:'flex-start'}}>
          <View style={{width:80,borderRadius:12,height:80,backgroundColor:'#1C2733',margin:10,
        alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../image/HomeScreen/img1.png')} style={{width:40,borderRadius:20,height:40}}/>
            <Text style={{color:'#FFF',fontSize:13}}>Danila</Text>
            </View>
            
            </View>
    <View style={{width:'100%',height:100,
    alignItems:'center',justifyContent:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
      
      <View>
        <View style={{width:52,height:52,backgroundColor:'#7D8E98',borderRadius:26,alignItems:'center',justifyContent:'center'}}>
        
        <Image source={require('../../image/CallingScreen/img10.png')}/>
        </View>
      </View>
      <TouchableOpacity  onPress={()=>VideoCallHandler()} style={{width:52,height:52,borderRadius:26,backgroundColor:'#71E079',
        alignItems:'center',justifyContent:'center',bottom:'0%'}}>
          <Image source={require('../../image/CallingScreen/img11.png')}/>
        </TouchableOpacity>
      <View>
        <Image source={require('../../image/CallingScreen/img4.png')}/>
      </View>
            
        <TouchableOpacity onPress={()=>navigation.navigate('UserOne')}
         style={{width:52,height:52,borderRadius:26,backgroundColor:'#8B3B3E',alignItems:'center',bottom:'0%',
         justifyContent:'center'}}>
          <Image source={require('../../image/CallingScreen/img5.png')}/>
          </TouchableOpacity>
    </View>

    </ImageBackground>
    </View> 
  </View>
  )
}
