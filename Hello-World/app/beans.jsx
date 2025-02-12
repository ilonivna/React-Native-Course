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
} from "react-native";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from "@/components/ui/accordion";
import BeansImg from "../assets/images/beans.jpg";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import { BeansItems } from "../constants/BeansItems";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";


export default function Beans() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;


  return (
    <ImageBackground source={BeansImg} style={styles.image} resizeMode="cover">
      <Container style={styles.container}>
        <View style={styles.overlay} />
        <View style={{ paddingLeft: 15, paddingRight: 15, }}>
          <Text style={styles.title}>Beans</Text>
          <Text style={styles.text}>
            If you are a self-confessed coffee lover, to really appreciate your
            coffee we invite you to learn more about the main coffee bean types
            that are currently found on the market.
          </Text>
          <Text style={styles.text}>
            The four main coffee types are Arabica, Robusta, Excelsa, and
            Liberica and all four of them have radically different taste
            profiles.
          </Text>
        </View>
        
          <FlatList
            style={{ backgroundColor: "transparent" }}
            showsVerticalScrollIndicator={false}
            data={BeansItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View>
                  <Text style={styles.textBtn}>Origin: {item.origin}</Text>
                  <Text style={styles.textBtn}>Use: {item.use}</Text>
                  <Text style={styles.textBtn}>Flavor: {item.flavor}</Text>
                </View>
                <Accordion variant="unfilled" className="text-amber-500">
                <AccordionItem value={item.id} className="rounded-lg bg-stone-950/75">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText className="text-amber-500">{item.name}</AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon as={ChevronUpIcon} className="text-amber-500"/>
                            ) : (
                              <AccordionIcon as={ChevronDownIcon} className="text-amber-500"/>
                            )}
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText className="text-amber-500 text-justify">
                      {item.description}
                    </AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
                </Accordion>
              </View>
            )}
          />
        
      </Container>
    </ImageBackground>
  );
}

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    container: {
      flex: 1,
      alignItems: "center", 
    },
    title: {
      color: "white",
      fontSize: 26,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 20,
    },
    text: {
      color: "white",
      fontSize: 18,
      textShadowColor: "rgba(0, 0, 0, 0.71)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      textAlign: "justify",
      lineHeight: 25,
      marginBottom: 10,
      marginTop: 10,
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
        backgroundColor: "rgba(120, 53, 15, 0.2)",
      },
      itemContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(120, 53, 15, 0.8)",
        borderStyle: "solid",
        marginVertical: 10,
      }
  });
};
