import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import IcedCoffeeImg from "../../assets/images/iced-coffee.png";

const  app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={IcedCoffeeImg}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.text}>Welcome to your personal coffee house</Text></ImageBackground>
    </View>
  )
}

export default  app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
  }
})