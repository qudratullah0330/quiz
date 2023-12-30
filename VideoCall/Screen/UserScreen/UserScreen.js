import React from 'react'
import { View,Text,Image } from 'react-native'

export default function UserScreen() {
  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'white',height:80}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img2.png')} style={{width:35,height:35}}/>
            <View style={{marginHorizontal:20}}>
                <Text style={{fontSize:15,fontWeight:'500'}}>Elon Musk</Text>
                <Text style={{fontSize:12,fontWeight:'400'}}>Sloagen oder Status what ever</Text>
             </View>
            </View>
             <View>
            <Image source={require('../../image/HomeScreen/img3.png')} style={{width:20,height:20,tintColor:'grey'}}/>
            </View>
            <View>
            <Image source={require('../../image/HomeScreen/img4.png')} style={{width:20,height:20}}/>
            </View>
        </View>
        <View style={{width:'100%',height:40,alignItems:'flex-end',margin:12,flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img10.png')} style={{width:15,height:15}}/>
            <Text style={{marginHorizontal:10}}>New User</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',height:52,backgroundColor:'rgba(0, 0, 0, 0.04)',}}>
            <View style={{flexDirection:'row',}}>
                
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{marginHorizontal:15}}/>
                    <View style={{marginHorizontal:0}}>
                        <Text style={{fontSize:12}}>User Name</Text>
                        <Text style={{fontSize:10,color:'grey'}}>Sloagen oder Status what ever</Text>
                    
                </View>
            </View>
            <View style={{margin:11}}>
                <Image source={require('../../image/HomeScreen/img11.png')}/>
            </View>
        </View>
    </View>
  )
}
