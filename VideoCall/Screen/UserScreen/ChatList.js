import React from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'

export default function ChatList({navigation}) {
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
          
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')}
         style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',height:52,backgroundColor:'rgba(255, 255, 255, 0.5)',}}>
            <View style={{flexDirection:'row',}}>
                
                    <Image source={require('../../image/HomeScreen/img12.png')} style={{marginHorizontal:15}}/>
                    <View style={{marginHorizontal:0}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>'User Name'</Text>
                        <Text style={{fontSize:8,color:'grey'}}>1 day ago</Text>
                        </View>
                        <Text style={{fontSize:12,color:'grey'}}>End encryption to what end?</Text>
                    
                </View>
            </View>
            <View style={{margin:11}}>
                <Image source={require('../../image/HomeScreen/img11.png')}/>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',height:52,backgroundColor:'rgba(0, 0, 0, 0.04)',}}>
            <View style={{flexDirection:'row',}}>
                
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{marginHorizontal:15}}/>
                    <View style={{marginHorizontal:0}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>'User Name'</Text>
                        <Text style={{fontSize:8,color:'grey'}}>1 day ago</Text>
                        </View>
                        <Text style={{fontSize:12,color:'grey'}}>End encryption to what end?</Text>
                      </View>
            </View>
            <View style={{margin:11}}>
                <Image source={require('../../image/HomeScreen/img11.png')}/>
            </View>
        </View>
    </View>
  )
}






