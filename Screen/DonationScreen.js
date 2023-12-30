import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList,ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { PixelRatio } from 'react-native';
import { AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc,getDocs,collection,onSnapshot  } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);




const pixelSize = PixelRatio.getPixelSizeForLayoutSize(111);



const images = [
  { id: 1, source: require('../Img/HomePageImg/img1.png') },
  { id: 2, source: require('../Img/HomePageImg/img211.png') },
  { id: 3, source: require('../Img/HomePageImg/img31.png') },
  { id: 4, source: require('../Img/HomePageImg/img4.png') },
  // Add more images here
];

const DonationScreen = ({navigation}) => {
  const [selected, setSelected] = useState(0); // Initialize selected state
  const [usersData, setUsersData] = useState([]);
  const [requestsData, setRequestsData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
   

    console.log('requestsData:', requestsData);
    
  console.log(requestsData,'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch requests data after user data is retrieved
        const requestsCollection = collection(db, 'request');
        
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
  

    
  const renderItem = ({ item, index }) => (
    <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.slide}>
        <Image source={item.source} style={styles.image} />
      </View>
    </View>
  );

  return (
    <View style={{flex:1,backgroundColor:'#faedee'}}>
      <ScrollView style={{marginBottom:33}} showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1 }}>
      
<View style={{justifyContent:'center',marginTop:15,marginBottom:30}}>
       <Text style={{fontSize:17,color:'#272A2F',textAlign:'center'}}>Donation All Request</Text></View>
    
    </View>
   {loading?(<ActivityIndicator size="large" color="#B50102" />):(
 <FlatList data={requestsData} renderItem={({item})=>(

<View style={{alignItems:'center',justifyContent:'center',marginBottom:30,top:11}}>
      <View style={{flexDirection:'row',borderTopWidth:3,borderColor:'#B50102',
      width:'80%',height:150,backgroundColor:'white',elevation:4,borderRadius:15,
      marginBottom:15,marginBottom:10,
      alignItems:'center',justifyContent:'space-between',}}>
       
       <View ><View style={{margin:0,marginHorizontal:20,width:130}}>
        <Text style={{color:'#7E7E7E',fontSize:15,marginTop:5}}>Name</Text>
        <Text style={{fontSize:14}} numberOfLines={1}>{item.username}</Text>
        </View>
  
        <View style={{margin:5,marginHorizontal:20,width:130}}>
        <Text style={{color:'#7E7E7E',fontSize:16}}>Location</Text>
        <Text style={{fontSize:15}} numberOfLines={1}>{item.Location}</Text>
        <Text style={{fontSize:14}} numberOfLines={1}>{item.Hospital}</Text>
        </View>
  
        <View style={{margin:0,marginHorizontal:20,marginBottom:10}}>
        <Text style={{color:'#7E7E7E',fontSize:14}}>5 Min Ago</Text>
        
        </View></View>
  
        <View style={{margin:10,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
          <Image source={require('../Img/HomePageImg/img5.png')}style={{marginBottom:0,width:42,marginBottom:5,
            tintColor:'#B50102',height:57}}/>
            <View style={{alignItems:'center',position:'absolute',justifyContent:'flex-start',marginVertical:'30%'}}>
            <Text style={{position:'absolute',alignItems:'center',fontSize:19,color:'white'}}>{item.BloodGroup}</Text>
            </View>
          <Text style={{color:'#B50102',fontSize:18,fontWeight:'500',marginBottom:11}}>Donate</Text>
          <Text style={{color:'grey',fontSize:13,fontWeight:'500'}}>{item.Note}</Text>
        </View>

        
      </View>
      </View>)
  }/>)}
  
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320, // Adjust the width and height as needed
    height: 190,
    aspectRatio: 1.9,
    borderRadius: 12,
  },imgViewTwo:{width:160,height:80,backgroundColor:'#FFFFFF',
  justifyContent:'center',alignItems:'center',marginTop:22,borderRadius:10,elevation:2},
  
  imgView:{width:100,height:100,backgroundColor:'#FFFFFF',
  justifyContent:'center',alignItems:'center',marginTop:22,borderRadius:10,elevation:2},
  imageStyle:{width:40,height:44,marginBottom:0},
  imageStyleTwo:{width:40,height:44,marginBottom:0},
  imageStyleThree:{width:40,height:44,marginBottom:0},
  imageStyleFour:{width:40,height:40,marginBottom:0},
});

export default DonationScreen;
