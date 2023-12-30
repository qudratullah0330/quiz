import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { View,Text,Image,TouchableOpacity, ScrollView,Linking } from 'react-native'

export default function Contact({navigation}) {

    const makePhoneCall = () => {
        const phoneNumber = 'tel:+923078982572';
      
        Linking.openURL(phoneNumber)
            .catch((err) => console.error('An error occurred', err));
    };
    const makePhoneCall2 = () => {
        const phoneNumber = 'tel:+923078982572';
      
        Linking.openURL(phoneNumber)
            .catch((err) => console.error('An error occurred', err));
    };
    const makePhoneCall3 = () => {
        const phoneNumber = 'tel:+923078982572';
      
        Linking.openURL(phoneNumber)
            .catch((err) => console.error('An error occurred', err));
    };
    const makePhoneCall4 = () => {
        const phoneNumber = 'tel:+923078982572';
      
        Linking.openURL(phoneNumber)
            .catch((err) => console.error('An error occurred', err));
    };


      
    const goToGmail1 = () => {
        const emailAddress = 'qud0330537150@gmail.com'; // replace with the desired email address
      
        Linking.openURL(`mailto:${emailAddress}`)
          .catch((err) => console.error('An error occurred', err));
      };
         
    const goToGmail2 = () => {
        const emailAddress = 'qud0330537150@gmail.com'; // replace with the desired email address
      
        Linking.openURL(`mailto:${emailAddress}`)
          .catch((err) => console.error('An error occurred', err));
      };
         
    const goToGmail3 = () => {
        const emailAddress = 'qud0330537150@gmail.com'; // replace with the desired email address
      
        Linking.openURL(`mailto:${emailAddress}`)
          .catch((err) => console.error('An error occurred', err));
      };
         
    const goToGmail4 = () => {
        const emailAddress = 'qud0330537150@gmail.com'; // replace with the desired email address
      
        Linking.openURL(`mailto:${emailAddress}`)
          .catch((err) => console.error('An error occurred', err));
      };
  return (
    <View style={{flex:1,backgroundColor:'#faedee'}}>
        <View style={{ marginBottom: 20,margin:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <View style={{}}>

                    <Text style={{ fontSize: 22, fontWeight: '500',  marginRight: 40 }}>Contact Us</Text>
                    
                </View>
               <View></View>
                
            </View>
            <ScrollView style={{flex:.9}} showsVerticalScrollIndicator={false}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={{width:300,
            backgroundColor:'white',height:300,marginBottom:15,
            elevation:4,borderRadius:20,alignItems:'center',justifyContent:'center',
            borderTopWidth:3,borderColor:'#B50102'
        }}>
                <Image source={require('../Img/FIndDoners/img14.png')} style={{width:100,
                borderRadius:75,
                    height:100,marginBottom:4}}/>
                <Text style={{fontSize:18,marginBottom:8}}>Syed Haider Ali</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                 <MaterialIcons name='email' size={30} color='#B50102' />
                <Text style={{fontSize:18,marginBottom:0,marginLeft:10,color:'#3366cc'}}onPress={goToGmail1}>Haidershah17@yahoo.com</Text>
                </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <AntDesign name='phone' size={24} color='#B50102' style={{marginRight:10}}/>
                <View>       
                <Text style={{fontSize:18,marginBottom:8}}>+92 321 4903214</Text>
                </View>

                </View><TouchableOpacity onPress={makePhoneCall} style={{width:'80%',backgroundColor:'#B50102',borderRadius:22}}>
                    <Text style={{padding:6,color:'white',textAlign:'center',fontSize:20}}>Make a call</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:300,
            backgroundColor:'white',height:300,marginBottom:15,
            elevation:4,borderRadius:20,alignItems:'center',justifyContent:'center',
            borderTopWidth:3,borderColor:'#B50102'
      }}>
                <Image source={require('../Img/FIndDoners/img13.png')} style={{width:100,borderRadius:75,
                    height:100,marginBottom:4}}/>
                <Text style={{fontSize:20,marginBottom:8}}>Rana Jazab Ali</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                 <MaterialIcons name='email' size={30} color='#B50102' />
                <Text style={{fontSize:18,marginBottom:0,marginLeft:10,color:'#3366cc'}}onPress={goToGmail1}>ranajajeb9227@gmail.com</Text>
                </View><View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <AntDesign name='phone' size={24} color='#B50102' style={{marginRight:10}}/>
                <View>       
                <Text style={{fontSize:18,marginBottom:8}}>+92 307 8982572</Text>
                </View>

                </View><TouchableOpacity onPress={makePhoneCall2} style={{width:'80%',backgroundColor:'#B50102',borderRadius:22}}>
                    <Text style={{padding:6,color:'white',textAlign:'center',fontSize:20}}>Make a call</Text>
                </TouchableOpacity>
            </View>


            <View style={{width:300,
            backgroundColor:'white',height:300,marginBottom:15,
            elevation:4,borderRadius:20,alignItems:'center',justifyContent:'center',
            borderTopWidth:3,borderColor:'#B50102'
      }}>
                <Image source={require('../Img/FIndDoners/img17.png')} style={{width:100,borderRadius:75,
                    height:100,marginBottom:4}}/>
                <Text style={{fontSize:20,marginBottom:8}}>Dr Ali Raza</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                 <MaterialIcons name='email' size={30} color='#B50102' />
                <Text style={{fontSize:18,marginBottom:0,marginLeft:10,color:'#3366cc'}}onPress={goToGmail1}>dr.ali51000@gmail.com</Text>
                </View><View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <AntDesign name='phone' size={24} color='#B50102' style={{marginRight:10}}/>
                <View>       
                <Text style={{fontSize:18,marginBottom:8}}>+92 316 0786172</Text>
                </View>

                </View><TouchableOpacity onPress={makePhoneCall2} style={{width:'80%',backgroundColor:'#B50102',borderRadius:22}}>
                    <Text style={{padding:6,color:'white',textAlign:'center',fontSize:20}}>Make a call</Text>
                </TouchableOpacity>
            </View>


            <View style={{width:300,
            backgroundColor:'white',height:300,marginBottom:15,
            elevation:4,borderRadius:20,alignItems:'center',justifyContent:'center',
            borderTopWidth:3,borderColor:'#B50102'
      }}>
                <Image source={require('../Img/FIndDoners/img15.png')} style={{width:100,borderRadius:75,
                    height:100,marginBottom:4}}/>
                <Text style={{fontSize:20,marginBottom:8}}>Syed Zeeshan Akhtar</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                 <MaterialIcons name='email' size={30} color='#B50102' />
                <Text style={{fontSize:18,marginBottom:0,marginLeft:10,color:'#3366cc'}}onPress={goToGmail1}>Fahimekan28@gmail.com</Text>
                </View><View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <AntDesign name='phone' size={24} color='#B50102' style={{marginRight:10}}/>
                <View>       
                <Text style={{fontSize:18,marginBottom:8}}>+92 301 0012371</Text>
                </View>

                </View><TouchableOpacity onPress={makePhoneCall2} style={{width:'80%',backgroundColor:'#B50102',borderRadius:22}}>
                    <Text style={{padding:6,color:'white',textAlign:'center',fontSize:20}}>Make a call</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:300,
            backgroundColor:'white',height:300,marginBottom:15,
            elevation:4,borderRadius:20,alignItems:'center',justifyContent:'center',
            borderTopWidth:3,borderColor:'#B50102'
      }}>
                <Image source={require('../Img/FIndDoners/img16.png')} style={{width:100,borderRadius:75,
                    height:100,marginBottom:4}}/>
                <Text style={{fontSize:20,marginBottom:8}}>Muhammad Qasim Ali</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                 <MaterialIcons name='email' size={30} color='#B50102' />
                <Text style={{fontSize:18,marginBottom:0,marginLeft:10,color:'#3366cc'}}onPress={goToGmail1}>Djhussa@gmail.com</Text>
                </View><View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <AntDesign name='phone' size={24} color='#B50102' style={{marginRight:10}}/>
                <View>       
                <Text style={{fontSize:18,marginBottom:8}}>+92 307 4057020</Text>
                </View>

                </View><TouchableOpacity onPress={makePhoneCall2} style={{width:'80%',backgroundColor:'#B50102',borderRadius:22}}>
                    <Text style={{padding:6,color:'white',textAlign:'center',fontSize:20}}>Make a call</Text>
                </TouchableOpacity>
            </View>


            </View>
            </ScrollView>
    </View>
  )
}
