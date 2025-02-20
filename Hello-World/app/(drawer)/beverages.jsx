import {BeveragesItems} from "../../constants/BeveragesItems.js";
import BeveragesImages from "../../constants/BeveragesImages.js";
import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import BeveragesImg from "../../assets/images/beverages.jpg";

export default function Beverages() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;


  // const separator = <View style={styles.separator}></View>
  // const header = <Text>Top of List</Text>
  // const footer = <Text>Bottom of List</Text>
// can be added as props on FlatList component: ItemSeparatorComponent, ListHeaderComponent, ListFooterComponent, ListFooterComponentStyle={...}
// if no data returned from API another prop can be used in FlatList: 
// ListEmptyComponent={<Text>No data found.</Text>}
  return (
    <ImageBackground
      source={BeveragesImg}
      style={styles.image}
      resizeMode="cover"
    >
      <Container  style={styles.container}>
        <View style={styles.overlay}/>
        <View style={{ width: "100%" }}>
        <Text style={styles.title}>The World of Coffee Beverages</Text>     
        <FlatList
          data={BeveragesItems}
          
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            
            <View style={styles.itemContainer}>
              <View>
                <Text style={styles.textItemTitle}>{item.title}</Text>
                <Text style={styles.text}>{item.description}</Text>
              </View>
              <View style={styles.imageCont}>
                <Image source={BeveragesImages[item.id - 1]} style={styles.imageListItem} />
              </View>
            </View>
          )}
        />
        </View>
      </Container>
    </ImageBackground>
  );
}



// backgroundColor: colorScheme === "dark" ? "rgba(0, 0, 0, 0.46)" : "someOtherColor", 
const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      flex: 1,
    },
    imageListItem: {
        width: "100%",
        height: "100%", 
        resizeMode: 'cover',
        borderRadius: 30,  
        overflow: 'hidden', 
    },
    imageCont: {
        alignSelf: "stretch",
        height: 300, 
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.46)",
    },
    container: {
      flex: 1,
      alignItems: "center",

 
    },
    title: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
    paddingBottom: 15,
    marginTop: 20,
    },
    text: {
      color: "white",
      fontSize: 18,
      textShadowColor: "rgba(0, 0, 0, 0.71)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10,
      marginTop: 10,
    },
    textItemTitle: {
        color: "white",
        fontSize: 28,
        textShadowColor: "rgba(0, 0, 0, 0.71)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textAlign: "justify",
        textAlign: 'center',
        paddingVertical: 10,
    },
    textBtn: {
      color: "#f7a56a",
      fontSize: 18,
      textShadowColor: "rgba(0, 0, 0, 0.71)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      textAlign: "justify",
      padding: 5,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: "rgba(120, 53, 15, 0.4)",
    },
    itemContainer: {
      borderRadius: 30,
      borderWidth: 1,
      borderColor: "rgba(120, 53, 15, 0.8)",
      borderStyle: "solid",
      marginBottom: 15,
      backgroundColor: "rgba(0,0,0,0.5)",
      alignSelf: 'stretch',
      width: '100%',
    },
  });
};
