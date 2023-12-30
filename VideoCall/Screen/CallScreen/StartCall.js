import React, { useState } from 'react'
import { Text, View,StyleSheet, ImageBackground, Image,Modal,TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'


export default function StartCall({navigation}) {
    const [selectVideo,setSelectVideo]=useState(false)
    const [micOff,setMicOff]=useState(false)
    const [selfVideoCall,setSelfVideoCall]=useState(false)
    const [show,setShow]=useState(false)
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
    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
    <View style={{width:'100%',flex:1,backgroundColor:'#222E3C',}}>
    <View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:20}}>
        <Image source={require('../../image/CallingScreen/img1.png')}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../../image/CallingScreen/img2.png')}/>
            <Text style={{color:'white',marginHorizontal:5}}>End to End Call</Text>
          
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       
         <TouchableOpacity onPress={()=>setShow(true)}>
         <Image source={require('../../image/CallingScreen/img3.png')}/>
         </TouchableOpacity>
        </View>
      </View>
      
    </View>

    {selectVideo&&!micOff?<View style={{alignItems:'flex-end',margin:20}}>
           <ImageBackground source={require('../../image/HomeScreen/img8.png')}style={{width:96,height:92,borderRadius:12}}>
          <View style={{flex:1,justifyContent:'flex-end'}}>
           <Image source={require('../../image/HomeScreen/img8.png')}style={{width:16,height:15}}/>
           </View>
           </ImageBackground>
           
        </View>:null
    }  
    {
        micOff?<View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'rgba(125, 142, 152, 0.20)',
            flexDirection:'row',width:187,height:32,borderRadius:18,alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../image/HomeScreen/img8.png')}style={{margin:5}}/>
                <Text style={{color:'white'}}>Elon’s microphone is off</Text>
            </View>
        </View>:null
    }
    <View style={{alignItems:'center',justifyContent:'flex-start',flex:1,marginVertical:'10%'}}>
       <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
        <Image source={require('../../image/HomeScreen/img8.png')} style={{width:144,height:135,borderRadius:72}}/>
      </View>
      <View style={{marginBottom:10}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'500',lineHeight:23,marginBottom:5}}>Elon Musk</Text>
       <Text style={{color:'#FFFFFF99',textAlign:'center'}}>00:01</Text>
      </View>
      <View style={{margin:'1%',flexDirection:'row',width:'70%',justifyContent:'space-between',flex:1,
    
      alignItems:'center',bottom:'0%'}}>
        {!selectVideo?<TouchableOpacity  onPress={()=>VideoCallHandler()} style={{width:52,height:52,borderRadius:26,backgroundColor:'#53575e',
        alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../image/HomeScreen/img24.png')}/>
        </TouchableOpacity>:
        <TouchableOpacity  onPress={()=>VideoCallHandler()} style={{width:52,height:52,borderRadius:26,backgroundColor:'#71E079',
        alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../image/HomeScreen/img24.png')}/>
        </TouchableOpacity>
        }<View style={{width:108,height:108,borderRadius:54,backgroundColor:'#ccedbe',
        alignItems:'center',
        justifyContent:'center'}}>
          <View style={{width:90,height:90,backgroundColor:'',borderRadius:45,
          justifyContent:'center'
          ,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>micOffHndler()}>
           <ImageBackground source={require('../../image/HomeScreen/img24.png')} style={{width:64,height:64,alignItems:'center',justifyContent:'center'}}>
            {!micOff?<Image source={require('../../image/CallingScreen/img4.png')}/>:
            <Image source={require('../../image/HomeScreen/img24.png')} style={{width:32,height:32}}/>}
           </ImageBackground>
           </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('UserOne')}
         style={{width:52,height:52,borderRadius:26,backgroundColor:'#8B3B3E',alignItems:'center',
         justifyContent:'center'}}>
          <Image source={require('../../image/HomeScreen/img24.png')}/>
        </TouchableOpacity>
      </View>
    </View>

    {
       selectVideo&&micOff? <ImageBackground source={require('../../image/HomeScreen/img24.png')}style={{width:96,height:92,borderRadius:12}}>
        <View style={{flex:1,justifyContent:'flex-end'}}>
         <Image source={require('../../image/HomeScreen/img24.png')}style={{width:16,height:15}}/>
         </View>
         </ImageBackground>:null
    }
    <View style={{width:'100%',alignItems:'center',bottom:'7%'}}>
     {!selectVideo?<TouchableOpacity 
     style={{width:95,height:35,backgroundColor:'rgba(125, 142, 152, 0.20)',
     alignItems:'center',justifyContent:'center',borderRadius:18,flexDirection:'row',justifyContent:'space-evenly'}}>
      <Image source={require('../../image/HomeScreen/img24.png')}/>
      <Text style={{color:'white'}}>Speaker</Text>
     </TouchableOpacity>:
     <TouchableOpacity onPress={()=>navigation.navigate('VideoCalling')}
     style={{width:116,height:32,backgroundColor:'rgba(125, 142, 152, 0.20)',
     alignItems:'center',justifyContent:'center',borderRadius:18,flexDirection:'row',justifyContent:'space-evenly'}}>
      <Image source={require('../../image/HomeScreen/img24.png')}/>
      <Text style={{color:'white'}}>Flip camera</Text>
     </TouchableOpacity>
     }</View>
    </View>

    <Modal transparent={true} visible={show}>
        <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
            <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30,justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>setShow(false)}>
                <Image source={require('../../image/HomeScreen/img14.png')}/>
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:16,fontWeight:'500',marginBottom:6}}>Back to Chat Screen</Text>
                <Text style={{fontSize:12,color: 'rgba(0,0,0,0.3)',marginBottom:6}}>Total Contacts 30</Text>
                <View style={{width:145,height:3,backgroundColor:'rgba(178, 178, 178, 0.5);'}}></View>
                </View>
                <View></View>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{width:276,borderRadius:8,flexDirection:'row',alignItems:'center',
                    justifyContent:'space-around',height:40,backgroundColor:'rgba(178, 178, 178, 0.5);'}}>
                        <Image source={require('../../image/HomeScreen/img3.png')} style={{tintColor:'rgba(28, 39, 76, 0.6);',marginHorizontal:20}}/>
                        <TextInput style={{width:230,height:40,}} placeholder='Search by User name or Number'/>

                    </View>
                    <View style={{width:39,
                        alignItems:'center',justifyContent:'center',
                        borderRadius:8,height:40,backgroundColor:'rgba(28, 39, 76, 0.06);'}}>
                     <Text style={{fontSize:16}}>A</Text>
                    </View>
                </View>
                <View style={{marginTop:30,margin:11}}>
                    <Text style={{color:'rgba(28, 39, 76, 1);'}}>Must Conacted</Text>
                </View> 

                <View style={{width:'100%',flexDirection:'row',alignItems:'center'
                ,height:52,backgroundColor:"rgba(0, 0, 0, 0.04);",justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',margin:10}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{width:40,height:40,}}/>
                   <View style={{marginHorizontal:10}}>
                    <Text>User Name</Text>
                    <Text>User Sloagen</Text>
                    </View>
                  </View>
                  <View style={{width:16,height:16,borderWidth:1,margin:20,borderRadius:8}}>

                  </View>
                </View>
            

                <View style={{width:'100%',flexDirection:'row',alignItems:'center'
                ,height:52,backgroundColor:"rgba(0, 0, 0, 0.04);",justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',margin:10}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{width:40,height:40,}}/>
                   <View style={{marginHorizontal:10}}>
                    <Text>User Name</Text>
                    <Text>User Sloagen</Text>
                    </View>
                  </View>
                  <View style={{width:16,height:16,borderWidth:1,margin:20,borderRadius:8}}>

                  </View>
                </View>
            


                <View style={{marginTop:30,margin:11}}>
                    <Text style={{color:'rgba(28, 39, 76, 1);'}}>A</Text>
                </View> 

                <View style={{width:'100%',flexDirection:'row',alignItems:'center'
                ,height:52,backgroundColor:"rgba(0, 0, 0, 0.04);",justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',margin:10}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{width:40,height:40,}}/>
                   <View style={{marginHorizontal:10}}>
                    <Text>User Name</Text>
                    <Text>User Sloagen</Text>
                    </View>
                  </View>
                  <View style={{width:16,height:16,borderWidth:1,margin:20,borderRadius:8}}>

                  </View>
                </View>
            

                <View style={{width:'100%',flexDirection:'row',alignItems:'center'
                ,height:52,backgroundColor:"rgba(0, 0, 0, 0.04);",justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',margin:10}}>
                    <Image source={require('../../image/HomeScreen/img8.png')} style={{width:40,height:40,}}/>
                   <View style={{marginHorizontal:10}}>
                    <Text>User Name</Text>
                    <Text>User Sloagen</Text>
                    </View>
                  </View>
                  <View style={{width:16,height:16,borderWidth:1,borderColor:'rgba(27, 196, 105, 1)',backgroundColor:'rgba(27, 196, 105, 1)',margin:20,borderRadius:8}}>

                  </View>
                </View>
            
                 <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                   <View style={{backgroundColor:'rgba(0, 0, 0, 0.04)',width:'95%',margin:10
                   ,height:83,borderRadius:15}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:6}}>
                    <Text>User added to Call</Text>
                    <Text>Max. 4 User </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'66%'}}>
                       <Image source={require('../../image/HomeScreen/img8.png')}/>
                       <Image source={require('../../image/HomeScreen/img8.png')}/>
                       <Image source={require('../../image/HomeScreen/img8.png')}/>
                       <Image source={require('../../image/HomeScreen/img8.png')}/>
                    </View>
                    <TouchableOpacity  onPress={()=>{navigation.navigate('AddedUser'),setShow(false)}}
                    style={{borderRadius:17,width:35,height:35,backgroundColor:'rgba(52, 227, 107, 1)',alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../image/CallingScreen/img5.png')} style={{tintColor:'white',width:16,height:16}}/>
                    </TouchableOpacity>

                    </View>
                   </View>
                 </View>

                </View>
        </View>
    </Modal>
  </View>
  )
}
