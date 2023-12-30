import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList,ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { PixelRatio } from 'react-native';
import { AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc,getDocs,collection,onSnapshot  } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { useFirebaseMessaging } from 'expo';
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

const HomeScreen = ({navigation,route}) => {
  const [selected, setSelected] = useState(0); // Initialize selected state
  const [usersData, setUsersData] = useState([]);
  const [requestsData, setRequestsData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
   
 console.log('......,,,,,,,,,,,,,,IIIIIII',)
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
  
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      } finally {
        // Set loading to false once data is fetched or an error occurs
        setLoading(false);
      }
    };
  
    const unsubscribe = onAuthStateChanged(auth, fetchUserData);
  
    return () => unsubscribe();
  }, [user]);

  
  

    
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
      <View
        style={{
          marginBottom: 0,
          flex: 0.08,
          marginTop: 0,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../Img/HomePageImg/icon2.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Image source={require('../Img/HomePageImg/imghead1.png')} style={{ width: 180, height: 63 }} />
      
        <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
        <AntDesign name="questioncircle" size={30} color="#B50102" />
        </TouchableOpacity> 
      </View>
      <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginBottom: 1 }}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={350} // Adjust the width as needed
            itemWidth={350} // Adjust the width as needed
            onSnapToItem={(index) => setSelected(index)} // Update selected state when an item is snapped
            autoplay={true} // Enable autoplay
            autoplayInterval={3000} // Set the interval for autoplay (in milliseconds)
            loop={true}
           />
        </View>
       
      </View>
      <View style={{ flexDirection: 'row',justifyContent:'center',bottom:'3%' }}>
          {images.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                backgroundColor: selected === index ? '#B50102' : '#E0E0E0',
                margin: 3,
                borderRadius: 20,
              }}
            ></View>
          ))}
        </View>

         
        <View style={{flex:0.45,marginVertical:0,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('FindScreenTwo')} style={styles.imgView}>
            <Image source={require('../Img/HomePageImg/ion_search-outline.png')}style={styles.imageStyle}/>
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}>Find Donors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgView} onPress={()=>navigation.navigate('DonationHistory')}>
            <Image source={require('../Img/HomePageImg/iconview2.png')}style={styles.imageStyleTwo}/>
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}>Donation History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imgView} onPress={()=>navigation.navigate('CreateRequste')}>
            <Image source={require('../Img/HomePageImg/iconview3.png')}style={styles.imageStyleThree}/>
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}>Request Blood</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.imgView}onPress={()=>navigation.navigate('Compaign')}>
            <Image source={require('../Img/HomePageImg/iconview6.png')}style={styles.imageStyleFour}/>
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}>Campaign</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgView} onPress={()=>navigation.navigate('Anuncement')}>
            <Image source={require('../Img/HomePageImg/iconview5.png')}style={styles.imageStyleFour}/>
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}> Anouncement</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.imgView} onPress={()=>navigation.navigate('FaqsData')}>
           <MaterialCommunityIcons name="message-reply-text-outline" size={34} color="#B50102" />
            <Text style={{fontSize:14,color:'#7E7E7E',margin:0,textAlign:'center'}}> FAQs</Text>
          </TouchableOpacity>
          
        </View>
<View style={{justifyContent:'center',marginTop:25,marginBottom:20}}>
       <Text style={{fontSize:17,color:'#272A2F',marginHorizontal:20}}>Donation Request</Text></View>
    
    </View>
   {loading?(<ActivityIndicator size="large" color="#B50102" />):(
 <FlatList data={requestsData} renderItem={({item})=>(

<View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
      <View style={{flexDirection:'row',borderTopWidth:10,
      width:'90%',height:150,backgroundColor:'white',borderColor:'darkred',elevation:4,borderRadius:15,marginBottom:15,marginBottom:0,
      alignItems:'center',justifyContent:'space-between',}}>
       <View style={{padding:22}}>
       <View ><View style={{margin:0,marginHorizontal:0}}>
        <Text style={{color:'#7E7E7E',fontSize:13}}>Name</Text>
        <Text style={{fontSize:14,width:150,fontWeight:'bold'}}>{item.username}</Text>
        </View>
  
        <View style={{margin:0,marginHorizontal:0}}>
        <Text style={{color:'#7E7E7E',fontSize:16,}}>Location</Text>
        <Text style={{fontSize:13,width:150,fontWeight:'bold'}} numberOfLines={1}>{item.Location}</Text>
        <Text style={{fontSize:13,width:150,fontWeight:'bold'}} numberOfLines={1}>{item.Hospital}</Text>
        </View>
  
        <View style={{margin:0,marginHorizontal:0,marginBottom:0,}}>
        <Text style={{color:'#7E7E7E',fontSize:12}}>5 Min Ago</Text>
        </View>
        </View></View>
  
        <View style={{margin:30,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
          <Image source={require('../Img/HomePageImg/img5.png')}style={{marginBottom:0,width:42,marginBottom:5,
            tintColor:'#B50102',height:57}}/>
            <View style={{alignItems:'center',position:'absolute',justifyContent:'flex-start',marginVertical:'30%'}}>
            <Text style={{position:'absolute',alignItems:'center',fontSize:19,color:'white'}}>{item.BloodGroup}</Text>
            </View>
          <Text style={{color:'#B50102',fontSize:18,fontWeight:'500',marginBottom:11}}
          onPress={()=>navigation.navigate('DonationDetailes',{
            item:item
          })}>Donate</Text>
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
  
  imgView:{width:105,height:105,backgroundColor:'#FFFFFF',
  justifyContent:'center',alignItems:'center',marginTop:22,borderRadius:10,elevation:4,borderWidth:1,
  borderColor:'darkred'},
  imageStyle:{width:40,height:44,marginBottom:0},
  imageStyleTwo:{width:40,height:44,marginBottom:0},
  imageStyleThree:{width:40,height:44,marginBottom:0},
  imageStyleFour:{width:40,height:40,marginBottom:0},
});

export default HomeScreen;
