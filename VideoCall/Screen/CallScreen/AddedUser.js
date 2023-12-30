import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
export default function AddedUser() {
  return (
    <View style={{flex:1,backgroundColor:'#222E3C'}}>
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
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:0,paddingVertical:10}}>

    <View style={{width:129,height:180,borderWidth:1,borderColor:'rgba(235, 236, 237, 1);',borderRadius:15,
    alignItems:'center',justifyContent:'center'}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:10,width:50,height:50,borderRadius:25}}/>  
          
          <View style={{margin:8,alignItems:'center'}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Elon Musk</Text>    
            <Text style={{color:'white'}}>00:01</Text>     
            </View>
            <Image source={require('../../image/CallingScreen/img6.png')} style={{width:86,height:32}}/>
        </View>
    </View>
    <View style={{width:129,height:180,borderWidth:1,borderColor:'rgba(235, 236, 237, 1);',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../../image/CallingScreen/img7.png')}/>
    </View>
    </View>

<View style={{alignItems:'center'}}>
    <View style={{width:123,height:124,borderRadius:15,borderWidth:1,borderColor:'rgba(235, 236, 237, 1)',alignItems:'center',justifyContent:'center'}}>
       <Image source={require('../../image/HomeScreen/img1.png')} style={{width:50,height:50,borderRadius:25,margin:10}}/>
            
       <Image source={require('../../image/CallingScreen/img6.png')} style={{width:86,height:32,margin:10}}/>
            
    </View>

</View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:20,paddingVertical:20}}>
    <View style={{width:129,height:180,borderWidth:1,borderColor:'rgba(235, 236, 237, 1);',borderRadius:15}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:10,width:50,height:50,borderRadius:25}}/>  
          
          <View style={{margin:8,alignItems:'center'}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Elon Musk</Text>    
            <Text style={{color:'white'}}>00:01</Text>     
            </View>
            <Image source={require('../../image/CallingScreen/img6.png')} style={{width:86,height:32}}/>

        </View>
   
    </View>
    <View style={{width:129,height:180,borderWidth:1,borderColor:'rgba(235, 236, 237, 1);',borderRadius:15}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../image/HomeScreen/img8.png')} style={{margin:10,width:50,height:50,borderRadius:25}}/>  
          
          <View style={{margin:8,alignItems:'center'}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Elon Musk</Text>    
            <Text style={{color:'white'}}>00:01</Text>     
            </View>
            <Image source={require('../../image/CallingScreen/img6.png')} style={{width:86,height:32}}/>
        </View>
   
    </View>
    </View>


    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',}}>
                   <View style={{backgroundColor:'rgba(255, 255, 255, 1);',width:'95%',margin:10
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
                    style={{borderRadius:17,width:35,height:35,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../image/CallingScreen/img5.png')} style={{tintColor:'white',width:16,height:16}}/>
                    </TouchableOpacity>

                    </View>
                   </View>
                 </View>

    </View>
  )
}
