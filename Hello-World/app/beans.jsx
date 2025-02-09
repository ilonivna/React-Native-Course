import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BeansImg from "../assets/images/beans.jpg";

export default function Beans() {
    return (
       
            <ImageBackground source={BeansImg} style={styles.image} resizeMode="cover">
                <View style={styles.overlay} />
                <View style={styles.container}>
                    <Text style={styles.title}>Beans</Text>
                </View>
            </ImageBackground>
   
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, // Ensures SafeAreaView fills the screen
    },
    image: {
        flex: 1, // Ensures ImageBackground fills the parent (SafeAreaView)
        width: '100%',
        height: '100%', // Ensures full coverage
        resizeMode: 'cover',
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(0, 0, 0, 0.46)', // Dark overlay for readability
    },
    container: {
        flex: 1, 
        justifyContent: 'center', // Centers the text vertically
        alignItems: 'center', // Centers the text horizontally
        paddingBottom: 20,
        paddingHorizontal: 18,
    },
    title: {
        color: 'white', // Changed to white for visibility on dark overlay
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

