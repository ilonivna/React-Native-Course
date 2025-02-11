import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import IcedCoffeeImg from "../assets/images/iced-coffee.png";
import { Link } from 'expo-router';

const  app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={IcedCoffeeImg}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.text}>Welcome to your personal coffee house</Text>
      <View>
        <Link href="/explore" asChild>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Why coffee?</Text>
      </Pressable> 
      </Link>
      <Link href="/beans" asChild>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Explore the beans</Text>
      </Pressable></Link>
      <Link href="/beverages" asChild>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>What to drink?</Text>
      </Pressable></Link>
      </View>
      
      </ImageBackground>
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
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
  btn: {
height: 50,
borderRadius: 20, 
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 10,
margin: 20,
justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
  }
})