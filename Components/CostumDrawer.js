import React, { useState,useEffect } from 'react'
import { View,Image,Text, Modal } from 'react-native'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export default function CostumDrawer({props,navigation}) {
    const [show,setshow]=useState(false)
    const [selected, setSelected] = useState(0); // Initialize selected state
  
    const [user, setUser] = useState([]);
  console.log('////////////////',user)
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Fetch user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          setUser(userData);
        }

      });
  
      return () => unsubscribe();
    }, []);

  return (
    <View style={{flex:1}}>
   <DrawerContentScrollView contentContainerStyle={{}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    
    <View style={{marginHorizontal:22}}>
    <Image source={{uri:user.imageUrl}} style={{borderRadius:50,
        marginHorizontal:22,margin:10,width:80,height:80}}/></View>
        </View>
        <View style={{borderBottomWidth:2,borderBottomColor:'white',marginBottom:10}}>
        <Text style={{color:'white',fontSize:14,marginBottom:7,marginHorizontal:25}}>{user.username}</Text>
            <Text style={{color:'white',fontSize:14,marginBottom:20,marginHorizontal:25}}>{user.email}</Text>
        </View>
        <View style={{marginBottom:20}}>
        <View style={{marginBottom:20,flexDirection:'row',width:'50%',justifyContent:'space-evenly',alignItems:'center'}}>
        <AntDesign name="user" size={24} color="white" />
            <Text style={{fontSize:18,color:'white',}} onPress={()=>navigation.navigate('ProfileScreenTwo')}>Profile</Text>
        </View>

        <View style={{marginBottom:20,flexDirection:'row',width:'50%',justifyContent:'space-evenly',alignItems:'center'}}>
        <MaterialCommunityIcons name="message-reply-text-outline" size={24} color="white" />
            <Text style={{fontSize:18,color:'white',}} onPress={()=>navigation.navigate('FaqsData')}>FAQs</Text>
        </View>

        <View style={{marginBottom:20,flexDirection:'row',width:'64%',justifyContent:'space-evenly',alignItems:'center'}}>
        <MaterialCommunityIcons name="card-account-mail" size={24} color="white" />
            <Text style={{fontSize:18,color:'white',}} onPress={()=>navigation.navigate('Contact')}>Contact Us</Text>
        </View>

        <View style={{marginBottom:20,flexDirection:'row',width:'60%',justifyContent:'space-evenly',alignItems:'center'}}>
        <MaterialIcons name="logout" size={24} color="white" />
            <Text style={{fontSize:20,color:'white',}} onPress={()=>setshow(true)}>Log Out</Text>
        </View>

        <Modal transparent={true} visible={show}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={{width:'90%',height:120,backgroundColor:'white',borderRadius:10}}>
                <Text style={{fontSize:20,margin:13,fontWeight:'900'}}>message</Text>
                    <Text style={{fontSize:17,margin:0,marginHorizontal:20}}>Are You Sure To LogOut.</Text>
                    <View style={{justifyContent:'flex-end',flex:1,margin:9,alignItems:'flex-end'}}>
                    <View style={{flexDirection:'row',width:'40%',justifyContent:'space-between'}}>
                        <Text style={{fontSize:20}} onPress={()=>navigation.navigate('LoginScreen')}>Yes</Text>
                        <Text style={{fontSize:20}}onPress={()=>setshow(false)}>No</Text>
                    </View>
                    </View>
                </View>
            </View>
        </Modal>
        </View>
   
   </DrawerContentScrollView>
    </View>
  )
}
