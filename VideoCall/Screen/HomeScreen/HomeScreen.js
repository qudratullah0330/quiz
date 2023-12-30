import React from 'react'
import { Image, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{flex:1,}}>
        <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-evenly',backgroundColor:'white',height:80}}>
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

        <View style={{flexDirection:'row',}}>
            <View style={{width:'33.33%',height:33,borderWidth:2,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',
            backgroundColor:'white',borderColor:'background: rgba(0, 0, 0, 0.04);'}}>
                <Image source={require('../../image/HomeScreen/img5.png')} style={{width:15,height:15}}/>
                <Text style={{fontSize:12,color:'background: rgba(28, 39, 76, 1);'}}>Messages</Text>
                <View style={{width:5,height:5,backgroundColor:'red',borderRadius:3}}></View>
            </View>
            <View style={{width:'33.33%',height:33,borderWidth:2,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',
            backgroundColor:'white',borderColor:'background: rgba(0, 0, 0, 0.04);'}}>
                <Image source={require('../../image/HomeScreen/img6.png')} style={{width:15,height:15}}/>
                <Text style={{fontSize:12,color:'background: rgba(28, 39, 76, 1);'}}>Calls</Text>
                <View style={{width:5,height:5,backgroundColor:'red',borderRadius:3}}></View>
            </View>
            <View style={{width:'33.33%',height:33,borderWidth:2,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',
            backgroundColor:'white',borderColor:'background: rgba(0, 0, 0, 0.04);'}}>
                <Image source={require('../../image/HomeScreen/img7.png')} style={{width:15,height:15}}/>
                <Text style={{fontSize:12,color:'background: rgba(28, 39, 76, 1);'}}>Groups</Text>
                <View style={{width:5,height:5,backgroundColor:'red',borderRadius:3}}></View>
            </View>
          
        </View>

        <View style={{width:'100%',height:40,alignItems:'flex-end',margin:12,flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img5.png')} style={{width:15,height:15}}/>
            <Text style={{marginHorizontal:10}}>Messages</Text>
        </View>

        <View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'background: rgba(255, 255, 255, 0.5);',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


<View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'rgba(0, 0, 0, 0.04);',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


        <View style={{width:'100%',height:40,alignItems:'flex-end',margin:12,flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img6.png')} style={{width:15,height:15}}/>
            <Text style={{marginHorizontal:10}}>Calls</Text>
        </View>

        <View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'rgba(0, 0, 0, 0.04)',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


<View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'rgba(0, 0, 0, 0.04);',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


        <View style={{width:'100%',height:40,alignItems:'flex-end',margin:12,flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img7.png')} style={{width:15,height:15}}/>
            <Text style={{marginHorizontal:10}}>Groups</Text>
        </View>

        <View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'rgba(0, 0, 0, 0.04)',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


<View style={{}}>
         <View style={{width:'100%',flexDirection:'row',height:52,backgroundColor:'rgba(0, 0, 0, 0.04);',
        alignItems:'center',justifyContent:'space-around',}}>
            
            <View  style={{flexDirection:'row',marginRight:32}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:0,}}/>
            <View style={{marginHorizontal:11}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:12}}>User Name </Text>
                    <Text style={{color:'grey',fontSize:8}}>1 day ago</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontSize:12}}>End encryption to what end?</Text>
                </View>
                </View>
                
            </View>
              
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80,}}>
                <View>
                    <View style={{width:40,height:18,borderWidth:1,backgroundColor:'#e6e3e4',borderRadius:10,borderColor:'solid rgba(255, 255, 255, 1)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{width:10,height:10,backgroundColor:'#cc2f76',borderRadius:5}}></View>
                        <Text
                        >2</Text>

                    </View>
                </View>
                    <Image source={require('../../image/HomeScreen/img9.png')}/>
                </View>
         </View>
         
        </View>


    </View>
  )
}
