import React, { useState } from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'

export default function CallList({navigation}) {
    const [select,setSelect]=useState(false)
    const [select1,setSelect1]=useState(false)

    const SelectHandler=()=>{
        setSelect(!select)
        setSelect1(!select1)
    }
  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'white',height:80}}>
        
            <Image source={require('../../image/HomeScreen/img14.png')} style={{width:35,height:35,margin:10}}/>
           
            <View>
                <View style={{width:198,height:27,borderRadius:5,
                    backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <TouchableOpacity style={{width:88,height:23,backgroundColor:'white',alignItems:'center',justifyContent:'center'}} onPress={()=>SelectHandler()}>
                            <Text>All Calls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:88,height:23,backgroundColor:'',alignItems:'center',justifyContent:'center'}}>
                            <Text>Missed Calls</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
            </View>
            <View style={{width:50}}></View>
        </View>
        <View style={{width:'100%',height:40,alignItems:'flex-end',margin:12,flexDirection:'row'}}>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('StartCall')}
         style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',height:52,backgroundColor:'rgba(255, 255, 255, 0.5)',}}>
            <View style={{flexDirection:'row',}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{marginHorizontal:15}}/>
                    <View style={{marginHorizontal:0}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>'User Name'</Text>
                        <Text style={{fontSize:8,color:'grey'}}>1 day ago</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../image/HomeScreen/img16.png')}/>
                        <Text style={{fontSize:12,color:'grey',marginHorizontal:4}}>Missed Calls</Text>
                        </View>
                </View>
            </View>
            <View style={{margin:11}}>
                <Image source={require('../../image/HomeScreen/img11.png')}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('VideoCall')}
         style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',height:52,backgroundColor:'rgba(0, 0, 0, 0.04)',}}>
            <View style={{flexDirection:'row',}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{marginHorizontal:15}}/>
                    <View style={{marginHorizontal:0}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>'User Name'</Text>
                        <Text style={{fontSize:8,color:'grey'}}>1 day ago</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../image/HomeScreen/img15.png')}/>
                        <Text style={{fontSize:12,color:'grey',marginHorizontal:4}}>Missed Video Calls</Text>
                        </View>
                      </View>
            </View>
            <View style={{margin:11}}>
                <Image source={require('../../image/HomeScreen/img11.png')}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}






