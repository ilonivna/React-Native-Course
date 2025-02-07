import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import ExploreImg from "../../assets/images/coffee-splash.png";

const explore = () => {
  return (
    <ImageBackground source={ExploreImg} resizeMode='cover' style={styles.image}><View style={styles.container}>
      
      <Text style={styles.title}>Why {"("}the Right Amount of{")"} Coffee Is Good for You?</Text>

      <Text style={styles.text}>Ah, coffee. Whether you’re cradling a travel mug on your way to work or dashing out after spin class to refuel with a skinny latte, it’s hard to imagine a day without it. The caffeine perks you up, and there’s something incredibly soothing about sipping a steaming cup of joe. But is drinking coffee good for you?</Text>

      <Text style={styles.text}>Good news: The case for coffee is stronger than ever. Study after study indicates you could be getting more from your favorite morning beverage than you thought: Coffee is chock full of substances that may help guard against conditions more common in women, including Alzheimer’s disease and heart disease.</Text>

      <Text style={styles.text}>Caffeine is the first thing that comes to mind when you think about coffee. But coffee also contains antioxidants and other active substances that may reduce internal inflammation and protect against disease, say nutrition experts from Johns Hopkins University School of Medicine.</Text>
      
    </View></ImageBackground>
  )
}

export default explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18,
alignContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.71)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'justify',
    lineHeight: 25,
    marginBottom: 10,
    marginTop: 10,
  }, 
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
  }
})