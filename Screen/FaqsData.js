import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

export default function FaqsData({ navigation }) {
  const [openCollapsible, setOpenCollapsible] = useState(null);

  const toggleCollapse = (collapsibleNumber) => {
    setOpenCollapsible((prev) => (prev === collapsibleNumber ? null : collapsibleNumber));
  };

  const renderCollapsible = (collapsibleNumber) => {
    return (
      <View>
        
      <TouchableOpacity onPress={() => toggleCollapse(collapsibleNumber)}>
        <View style={{ borderWidth: 2, width: '100%', borderRadius: 20, top: collapsibleNumber * 10,backgroundColor:'#E55959',borderColor:'#B50102' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ padding: 6, left: 5, fontSize: 22,color:'white' }}>بلڈ ڈونٹین ایپ استعمال کرنے پر ہم مدد کرتے ہیں۔</Text>

          </View>
          <Collapsible collapsed={openCollapsible !== collapsibleNumber} style={{ height: 140 }}>
            <Text style={{ fontSize: 15, padding: 5, margin: 5,color:'white' }}>
            یہ ایک طویل عرصے سے قائم حقیقت ہے کہ ایک قاری کسی صفحے کے پڑھنے کے قابل مواد کی طرف سے مشغول ہو جائے گا جب
              اس کی ترتیب کو دیکھ رہا ہے.  استعمال کرنے کا نقطہ یہ ہے کہ اس میں کم یا زیادہ عام تقسیم ہے۔
              خطوط کا، 'یہاں مواد' استعمال کرنے کے بر
            </Text>
          </Collapsible>
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
       <View style={{ marginBottom: 20,margin:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <View style={{}}>

                    <Text style={{ fontSize: 22, fontWeight: '500',  marginRight: 40 }}>مشورہ</Text>
                    
                </View>
               <View></View>
                
            </View>
      <View style={{ alignItems: 'center', top: 0,margin:11 }}>
        {renderCollapsible(1)}
        {renderCollapsible(2)}
        {renderCollapsible(3)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});
