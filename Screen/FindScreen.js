import React, { useState,useEffect } from 'react'
import { Text, View, Image,TouchableWithoutFeedback, TouchableOpacity,Linking , TextInput, ImageBackground, ScrollView, Modal, TouchableHighlight, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc,getDocs,collection,onSnapshot  } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default function FindScreen({navigation}) {
const [show,setShow]=useState(false)

  const [selected, setSelected] = useState(0); // Initialize selected state
  const [usersData, setUsersData] = useState([]);
  const [requestsData, setRequestsData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemdata,setitemdata]=useState([])
   

 console.log('requestsData:', requestsData);
    
  console.log(requestsData,'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch requests data after user data is retrieved
        const requestsCollection = collection(db, 'users');
        
        // Listen for real-time updates
        const unsubscribe = onSnapshot(requestsCollection, (snapshot) => {
          const requestsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setRequestsData(requestsData);
          setLoading(false); // Set loading to false when data is fetched or updated
        });
  
        return () => {
          // Unsubscribe the listener when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };
  
    const unsubscribe = onAuthStateChanged(auth, fetchUserData);
  
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    console.log('Item Data Changed:', itemdata);
  }, [itemdata]);
  
  const HandleModal = (data) => {
    console.log('Selected Item Data:', data);
    setitemdata(data);
    setShow(!show);
  };
  const makePhoneCall = () => {
    const phoneNumber = `tel:+${itemdata.PhoneNo}`;
    console.warn(itemdata.PhoneNo, '88888888888888888888888888');
    Linking.openURL(phoneNumber)
        .catch((err) => console.error('An error occurred', err));
};

  
  const makeWhatsAppCall = () => {
    const phoneNumber = 'whatsapp://send?phone=+923089381874'; // replace with the desired phone number
  
    Linking.openURL(phoneNumber)
      .catch((err) => console.error('An error occurred', err));
  };
  console.warn(itemdata,'SSSSSSSSSKLKSLJDLJSDLNSKLDNNNL')
    return (
        <View style={{ flex: 1,backgroundColor:'#faedee' }}>
            <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 44, height: 44 }} />
                </TouchableOpacity>
                <View style={{}}>

                    <Text style={{ fontSize: 22, fontWeight: '500', textAlign: 'center', marginRight: 40 }}>Find Donars</Text>
                </View>
                <View></View>
            </View>

            <View style={{ flex: .15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{
                    borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                    width: '70%', height: 48,
                    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#FFFFFF'
                }}>
                    <Image source={require('../Img/DonationDetails/search.png')}
                        style={{ width: 24, height: 24, margin: 20 }} />
                    <TextInput style={{ width: '80%', fontSize: 18 }} placeholder='Search' />

                </View>
                <ImageBackground style={{ width: 48, height: 48 }} source={require('../Img/FIndDoners/img1.png')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image source={require('../Img/FIndDoners/img2.png')} style={{ width: 22, height: 32 }} />
                    </View>
                </ImageBackground>
            </View>
            <ScrollView style={{ flex:.8 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: .8, justifyContent:'center',alignItems: 'center',}}>
               <FlatList data={requestsData}
               renderItem={({item})=>
               <View style={{flex:1,marginRight:22,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>HandleModal(item)} style={{
                width: '90%', marginBottom: 10,elevation:4,borderTopWidth:3,borderColor:'darkred',
                flexDirection: 'row', justifyContent: 'space-between', height: 101, backgroundColor: 'white', borderRadius: 10, alignItems: 'center',marginHorizontal:5
            }}>
                <Image source={{uri:item.imageUrl}} style={{ width: 60, height: 60, margin: 15, borderRadius:42}} />
                <View>
                    <Text style={{ marginBottom: 15, fontSize: 19, fontWeight: '500' }}>{item.username}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Img/FIndDoners/img4.png')} style={{ width: 16, height: 16 }} />
                        <Text style={{ marginLeft: 9, color: '#7E7E7E', fontSize: 16 }}>{item.Location}</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../Img/img5.png')} style={{ width: 40, height: 54.3,tintColor:'#B50102', margin: 10 }} />
                    <Text style={{position:'absolute',marginHorizontal:15,marginVertical:'50%',color:'white',
                fontSize:15}}>{item.BloodGroup}</Text>
                </View>
            </TouchableOpacity>
            </View>}/>

                </View>
            </ScrollView>
        <View>
    <Modal visible={show} 
        transparent={true} 
        presentationStyle="overFullScreen" // or "overCurrentContext"
        animationType="fade"
        onRequestClose={() => setShow(false)}>
    <TouchableWithoutFeedback onPress={()=>setShow(false)}>
                <View
                 style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-end',
            alignItems:'center'}}>
                    <View style={{width:'100%',height:'80%',backgroundColor:'white',borderTopRightRadius:50,
                borderTopLeftRadius:50}}>
                    <View style={{alignItems:'center',justifyContent:'flex-start'}}>
                    <View style={{width:125,height:125,borderRadius:10,backgroundColor:'white',bottom:60,justifyContent:'center',alignItems:'center'}}>
                      <Image source={{uri:itemdata.imageUrl}} 
                      style={{width:120,height:120,borderRadius:10}}/>
                    </View>
                    </View>
                    <View style={{position:'absolute',width:'100%',justifyContent:'center',marginVertical:'23%'}}>
                        <View>
                    <Text style={{textAlign:'center',fontSize:22,lineHeight:33}}>{itemdata.username}</Text>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                        <Image source={require('../Img/FIndDoners/img4.png')} style={{width:18,height:18}}/>
                        <Text style={{color:'#7E7E7E',marginHorizontal:6}}>{itemdata.Location}</Text>
                    </View>
                   <ScrollView>
                   <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:20,alignItems:'center'}}>
                    
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:3}}> 
                        <Image source={require('../Img/FIndDoners/Hand.png')}style={{width:37,height:37}}/>
                        
                        </View>
                        <View style={{flexDirection:'row',margin:10}}>
                        <Text style={{margin:0,color:'#B50102',fontSize:16,lineHeight:24}}>6 </Text>
                        <Text style={{margin:0,color:'#7E7E7E',fontSize:16,lineHeight:24}}>Times Donated</Text>
                        </View>
                    
                    </View>

                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:3}}> 
                        <Image source={require('../Img/FIndDoners/Group32.png')}style={{width:26,height:35}}/>
                        <Image source={require('../Img/FIndDoners/Group33.png')}style={{width:14.84,height:20}}/>
                        </View>
                        <View style={{flexDirection:'row',margin:10}}>
                        <Text style={{margin:0,color:'#7E7E7E',fontSize:16,lineHeight:24}}>Blood Type - </Text>
                        <Text style={{margin:0,color:'#B50102',fontSize:16,lineHeight:24}}>{itemdata.BloodGroup}</Text>
                        </View>
                    </View>                    
                    </View>

                   <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{width:130,backgroundColor:'#B50102',borderRadius:10,flexDirection:'row',
                alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../Img/FIndDoners/img11.png')}style={{width:20,height:20}}/>
                        <Text style={{padding:10,textAlign:'center',color:'white',
                        fontSize:16,fontWeight:'500'}} onPress={makePhoneCall }>Call Now</Text>
                        
                    </View>
                    <View style={{width:130,backgroundColor:'#25D366',borderRadius:10,flexDirection:'row',
                alignItems:'center',justifyContent:'center'}}>
                  <FontAwesome name="whatsapp" size={24} color="white" />
                    <Text style={{padding:10,textAlign:'center',color:'white',
                        fontSize:16,fontWeight:'500'}} onPress={makeWhatsAppCall}>whatsapp</Text>

                    
                    </View>
                    </View>
                   <View style={{width:'100%',marginVertical:22,alignItems:'flex-end',}}>
                    <ImageBackground source={require('../Img/FIndDoners/map1.png')} style={{width:'95%',height:210,}}>
                        <View style={{flex:1}}>
                            <View style={{flex:.7,alignItems:'center',justifyContent:'center',marginRight:'20%'}}>
                        <Image source={require('../Img/FIndDoners/LocationIcon.png')} style={{width:100,height:100}}/>
                        </View>
                        <View style={{flex:.3,alignItems:'flex-end',marginRight:30,borderRadius:5}}>
                            <View style={{width:39,height:39,backgroundColor:'#B50102',alignItems:'center',justifyContent:'center'}}>
                               <Image source={require('../Img/FIndDoners/img10.png')} style={{width:'90%',height:'90%'}}/>
                            </View>
                        </View>
                        </View>
                    </ImageBackground>
                   </View>
                   </ScrollView>
                    </View>
                    </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>

        </View>
    )
}
