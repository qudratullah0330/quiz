import React,{useState} from 'react'
import { Image, Text, TouchableOpacity, View,Modal } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
export default function ChatScreen({navigation}) {
  const [show,setShow]=useState(false)
  return (
    <View style={{flex:1,}}>
    <View >
  <View style={{alignItems:'center',marginVertical:20,justifyContent:'space-around',width:'100%',backgroundColor:'white',flexDirection:'row'}}>
 <TouchableOpacity>
  <Image source={require('../../image/HomeScreen/img14.png')} style={{width:24,height:24,margin:10}}/>
  </TouchableOpacity>
  <TouchableOpacity 
   style={{flexDirection:'row',alignItems:'center',width:'60%',marginHorizontal:10}}>
    <Image source={require('../../image/HomeScreen/img8.png')} style={{width:42,height:42,marginLeft:20}}/>
    <View style={{marginHorizontal:15}}>
    <Text style={{fontSize:17,padding:0}}>User Name</Text>
    <Text style={{color:'grey',fontSize:14}}>User slogan will be here</Text>
    </View>
    </TouchableOpacity>
    <Text style={{color:'white',fontSize:14,padding:20}}></Text>
    <Text style={{color:'white',fontSize:14,padding:20}}></Text>
    <Text style={{color:'white',fontSize:14,padding:20}}></Text>
   <View style={{margin:15,flexDirection:'row',width:70,justifyContent:'space-between'}} >
    <Image source={require('../../image/HomeScreen/img3.png')} style={{width:24,height:24,tintColor:'grey'}}/>
    <TouchableOpacity onPress={()=>setShow(true)}>
    <Image source={require('../../image/HomeScreen/img6.png')} style={{width:24,height:24,tintColor:'grey'}}/>
    </TouchableOpacity>
    </View>
  </View>
  <View style={{flex:1,backgroundColor:'#1C2733'}}></View>
  </View>
    <View style={{flex:.9}}>
      <View style={{alignItems:'center',marginTop:0}}>
      <View style={{backgroundColor:'#7D8E9833',width:57,borderRadius:31}}>
      <Text style={{color:'white',padding:3,textAlign:'center'}}>26 july</Text>
      </View>
      </View>

      <View>
        <View style={{width:162,height:'15%',flexDirection:'row'
        ,alignItems:'center',margin:15,borderRadius:14,backgroundColor:'#222E3C'}}>
        <View style={{margin:10}}>
        
        
          <Text style={{fontSize:16,fontWeight:'400',color:'white'}}>Incoming Call</Text>
      
      <View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../../image/HomeScreen/img20.png')} style={{tintColor:'green'}}/>
        <Text style={{color:'rgba(255, 255, 255, 0.60)',fontSize:12,margin:1}}>11:38.. 7 secends</Text>
        </View>   
        </View>
        <View>
          <Image source={require('../../image/HomeScreen/img21.png')}/>
        </View>
        </View>
       


        <View style={{width:162,height:'15%',flexDirection:'row',justifyContent:'space-around'
        ,alignItems:'center',margin:15,borderRadius:14,backgroundColor:'#222E3C'}}>
        <View style={{margin:0}}>
        
        
          <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>Missed Call</Text>
      
      <View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../../image/HomeScreen/img20.png')} style={{tintColor:'#FC4C52'}}/>
        <Text style={{color:'rgba(255, 255, 255, 0.60)',fontSize:12,margin:1}}>11:38</Text>
        </View>   
        </View>
        <View>
          <Image source={require('../../image/HomeScreen/img21.png')}/>
        </View>
        </View>
       

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginRight:10}}>
        <View>
          <Image source={require('../../image/HomeScreen/img22.png')} style={{width:233,height:184}}/>
        </View>
      </View>

      </View>
    </View>
    <View style={{flex:.1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'white',height:'100%'}}> 
      
       <View style={{alignItems:'center'}}>
       <Image source={require('../../image/HomeScreen/img23.png')}/>
      </View>
      <View style={{width:220,borderRadius:5,justifyContent:'space-evenly',backgroundColor:'rgba(0, 0, 0, 0.05);',flexDirection:'row',alignItems:'center'}}>
        <TextInput style={{width:180,height:27,borderRadius:5,fontSize:16,color:'red',}}
      placeholderTextColor={'#7D8E98'} placeholder='            Message'/>
      <Image source={require('../../image/HomeScreen/img26.png')} />
    </View>
      <View>
       <Image source={require('../../image/HomeScreen/img24.png')}/>
      </View>
      <View>
       <Image source={require('../../image/HomeScreen/img25.png')}/>
      </View>
    
    </View>


<Modal transparent={true} visible={show}>
    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.4)'}}>
        <View style={{width:'100%',height:143,backgroundColor:'white',backgroundColor:'background: rgba(255, 255, 255, 1);',
      borderTopStartRadius:10,borderTopEndRadius:10}}>
       <TouchableOpacity onPress={()=>setShow(false)}>
        <Image source={require('../../image/HomeScreen/img14.png')} style={{width:25,height:25,margin:10}}
        />

       </TouchableOpacity>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'
      }}>
       <Image source={require('../../image/HomeScreen/img6.png')} style={{width:35,height:35,margin:10}}
        />
        <Image source={require('../../image/HomeScreen/img24.png')} style={{width:35,height:35,margin:10}}
        />
        </View>
        </View>
    </View>
</Modal>

    </View>
  )
}
