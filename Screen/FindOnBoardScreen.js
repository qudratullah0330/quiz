import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Login from './Login';

export default function FindOnBoardScreen({ navigation }) {
  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? '#B50102' : 'white';
    return (
      <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ bottom: 110 }}>
          {selected ? (
            <View
              style={{
                width: 71,
                height: 10,
                borderRadius: 20,
                marginHorizontal: 3,
                backgroundColor,
              }}
            />
          ) : (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: 10, height: 10, backgroundColor: '#d6d2d2', borderRadius: 20 }}></View>
            </View>
          )}
        </View>
      </View>
    );
  };

  const containerStyle = {
    flex: 1,
  };
  const imageContainerStyles = {
    width: '100%',
  };

  const titleStyle = {
    bottom: 160,
    fontSize: 24,
    fontWeight: '500',
  };
  const subTitleStyles = {
    bottom: 140,
    fontSize: 20,
    fontWeight: '500',
    color: '#7E7E7E',
  };
  const CustomDotContainer = ({ children }) => {
    return <View style={styles.dotContainer}>{children}</View>;
  };

  const NextButton = ({ ...props }) => (
    <TouchableOpacity {...props} style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <Text style={{ color: '#B50102', fontSize: 20, margin: 10 }}>Next</Text>
    </TouchableOpacity>
  );

  const SkipButton = ({ ...props }) => (
    <TouchableOpacity {...props} style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, margin: 10 }}>Skip</Text>
    </TouchableOpacity>
  );

  return (
    <Onboarding
      subTitleStyles={subTitleStyles}
      containerStyles={containerStyle}
      bottomBarColor="white"
      imageContainerStyles={imageContainerStyles}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      DotComponent={Dots}
      DotContainerComponent={CustomDotContainer}
      NextButtonComponent={NextButton}
      SkipButtonComponent={SkipButton}
      titleStyles={titleStyle}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../Img/onBoardingFindScreen/img3.png')} style={{ width: '80%', height: '50%' }} />,
          title: 'Find Blood Donors',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique tristique quam in.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../Img/onBoardingFindScreen/img5.png')} style={{ width: '70%', height: '50%' }} />,
          title: 'Post A Blood Request',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique tristique quam in.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Customize the margin as needed
  },
});
