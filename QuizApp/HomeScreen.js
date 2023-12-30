// App.js

import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rankingContainer}>
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Image source={require('./img/img8.png')} style={{ width: 33, height: 33 }} />
            <View style={styles.textContainer}>
              <Text style={styles.textRanking}>Ranking</Text>
              <Text style={styles.textValue}>348</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoItem}>
            <Image source={require('./img/img7.png')} style={{ width: 33, height: 33 }} />
            <View style={styles.textContainer}>
              <Text style={styles.textRanking}>Points</Text>
              <Text style={styles.textValue}>1200</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={()=>navigation.navigate('MCQsScreen')}
           style={[styles.categoryBox, { backgroundColor: '#e9edb9' }]}>
            <Text style={styles.categoryText}>MCQS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('QuizHome')}
           style={[styles.categoryBox, { backgroundColor: '#b9dded' }]}>
            <Text style={styles.categoryText}>QUIZ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f7a8f',
  },
  rankingContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    width: '80%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: '#4b5254',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: 2,
    height: '80%',
    backgroundColor: '#dedede',
  },
  textContainer: {
    margin: 11,
    alignItems: 'center',
  },
  textRanking: {
    fontSize: 18,
    color: 'white',
  },
  textValue: {
    fontSize: 19,
    fontWeight: '900',
    color: '#f5d32c',
  },
  bottomContainer: {
    flex: 0.6,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bottomRow: {
    flex: 1,
    backgroundColor: '#4b5254',
    width: '100%',
    borderTopStartRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  categoryBox: {
    width: '35%',
    height: '40%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});


