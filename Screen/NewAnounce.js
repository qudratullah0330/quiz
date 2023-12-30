import React, { useState } from 'react'
import { Text, View,StyleSheet, Image, TextInput,TouchableOpacity, ImageBackground,Modal } from 'react-native'
import { Entypo,AntDesign } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-modern-datepicker'
import {getToday,getFormatedDate} from 'react-native-modern-datepicker'
import {firebaseConfig} from '../Components/Firebase/firebaseConfig'
import {getApp} from 'firebase/app'
import {getFirestore,addDoc,collection} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function NewAnounce({navigation}) {
 const[show,setshow]=useState(false)
 const[Dateshow,setDate]=useState('')
 const[Location,setLocation]=useState()
 const[BloodGroup,setBloodGroup]=useState()
 const[DateshowError,setDateshowError]=useState(false)
 
 const[LocationError,setLocationError]=useState(false)
 
 const[BloodError,setBloodError]=useState(false)
 const handleDateSelect = (selectedDate) => {
  // Set the selected date
  setDate(selectedDate);

  // Filter the data based on the selected date
}
console.log(Dateshow)
const today=new Date();
const startDate=getFormatedDate(today.setDate(today.getDate()+1),'YYY/MMM/DDD')


const PostRequset = async () => {
  try {
    if(!Location){
      
      setLocationError(true)
    }
    else{
      setLocationError(false)
    }

    if(!Dateshow){
      setDateshowError(true)
    }
    else{
      setDateshowError(false)
    }

    if(!BloodGroup){
      setBloodError(true)
    }
    else{
      setBloodError(false)
    }
    
    // Create a new document with the data
    const docRef = await addDoc(collection(db, 'Anouncement'), {
      Location:Location,
        
      CollectedBlood:BloodGroup,
      Dateshow: Dateshow,
    
    });
 
     if(BloodError||LocationError||DateshowError){

     }else{
      navigation.navigate('Anuncement')
     }
    console.log('Document written with ID: ', docRef.id);

    // Optionally, you can reset the state variables after successful submission
    setColletedBlood('');
    setLocation('');
    setDate('');
    

    // Close the modal or navigate to another screen as needed
    setshow(false);
    // navigation.navigate('NextScreen'); // Uncomment and replace 'NextScreen' with the screen you want to navigate to
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
   <View  style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.imgView}>
        <ImageBackground source={require('../Img/inputIcon/img9.png')}
         style={{marginRight:22,width:'65%',height:170,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../Img/inputIcon/Group33.png')} style={{width:37.5,height:50,marginRight:'30%'}}/>
        </ImageBackground>
        
      </View>
      <View style={{alignItems:'center',marginBottom:20 }}>
        <Text style={{fontSize:26,color:'#B50102',fontWeight:'700'}}>BLOOD DONATION</Text>
        <Text style={{fontSize:16,fontWeight:'600'}}>COMMUNITY CARE</Text>
      </View>
      <Modal transparent={true} visible={show} >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center',backgroundColor:'rgba(0,0,0,0.5)' }}>
        <View style={{ width: '100%', height: '60%',backgroundColor:'#dfb6e3' , borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
         <View style={{}}>
         <View style={{alignItems:'flex-end',marginRight:20,top:'3%'}}>
          <AntDesign name='close' size={24} color='white'onPress={()=>setshow(false)}/></View>
           <View style={{width:'90%',alignItems:'center',margin:18,left:0,backgroundColor:'#e0c3e3'}}>
            
           <DatePicker
  selected={Dateshow}
  dateFormat="YYYY/MMM/DDD" // Specify the desired date format
  isTimePickerVisible={false} // Set this to false to hide the time picker
  maximumDate={startDate}
  onSelectedChange={(text) => handleDateSelect(text)}
/>
            </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.TextinputStyle}>
      {!LocationError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

      <View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyle} source={require('../Img/inputIcon/carbon_location.png')}/>
            <View style={styles.verticleLine}></View>
             <TextInput style={{width:'60%',fontSize:18,color:'#B50102'}}
            value={Location} onChangeText={(text)=>setLocation(text)} 
            placeholder='Enter Location'placeholderTextColor={'#B50102'}/>

         </View>
      
         
         {!BloodError?null :(<Text style={{color:'red',marginRight:'30%'}}>Please enter corect Blood Amount</Text>)}
         <View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyleLock} source={require('../Img/inputIcon/Group33.png')}/>
            <View style={styles.verticleLine}></View>
            <TextInput style={{width:'60%',fontSize:18,color:'#B50102',width:'100%'}} 
            value={BloodGroup} onChangeText={(text)=>setBloodGroup(text)}
            placeholder='Enter Collected Blood Amount'placeholderTextColor={'#B50102'}/>
         </View>
      
         {!DateshowError?null :(<Text style={{color:'red',marginRight:'46%'}}>Please enter corect Date</Text>)}<View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyle} source={require('../Img/inputIcon/img11.png')}/>
            <View style={styles.verticleLine}></View>
            <TextInput style={{width:'60%',fontSize:18,color:'#B50102'}}
            value={Dateshow} onPressIn={(text)=>{setshow(true),setDate(text)}} placeholder='Select Date'placeholderTextColor={'#B50102'}/>
         </View>
         
             </View>
      <View style={{flex:.1,justifyContent:'flex-start',alignItems:'center'}}>
      <TouchableOpacity  onPress={()=>PostRequset()}
           style={{width:'90%',borderWidth:2,borderColor:'#B50102',borderRadius:30,backgroundColor:'#B50102'}}>
          <Text style={{padding:6,textAlign:'center',fontWeight:'500',fontSize:22,color:'white',fontWeight:'bold'}}>Submit Data</Text>
          </TouchableOpacity>
          </View>
       
      </View>
      </KeyboardAwareScrollView>
  )
}

const styles=StyleSheet.create({
imgView:{
   
    width:'100%',
  flex:.50,
  marginTop:20,
  alignItems:'flex-end',
  marginBottom:3,

},
imgTextView:{
    flex:.1,
justifyContent:'flex-start',
alignItems:'center',
marginBottom:20
},
verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#B50102',
    marginRight:20,
  },
  TextinputStyle:{
    flex:.4,
    marginVertical:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30
  },
  inputContainerStyle:{
    borderWidth:1,
    width:'90%',
    height:50,
    borderRadius:5,
    borderColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
    marginBottom: 20,
    flexDirection:'row'
    ,alignItems:'center',elevation:3
    ,borderColor:'#B50102'
  },
  imgStyle:{
    width: 29,
    height: 29,
    margin: 17,
    marginRight:13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLock:{
    width: 23,
    height: 31,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
})