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
        <View>
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
            data={BeansItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <View>
                  <Text style={styles.text}>{item.origin}</Text>
                  <Text style={styles.text}>{item.use}</Text>
                  <Text style={styles.text}>{item.flavor}</Text>
                </View>
                <Accordion variant="unfilled" className="text-amber-500">
                <AccordionItem value={item.id} className="rounded-lg bg-amber-100/15">
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText className="text-amber-500">{item.name}</AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon as={ChevronUpIcon} />
                            ) : (
                              <AccordionIcon as={ChevronDownIcon} />
                            )}
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText className="text-amber-500">
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
    safeArea: {
      flex: 1, // Ensures SafeAreaView fills the screen
    },
    image: {
      flex: 1, // Ensures ImageBackground fills the parent (SafeAreaView)
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.46)",
    },

    container: {
      flex: 1,
      alignItems: "center",
      paddingBottom: 20,
      paddingHorizontal: 18,
    },
    title: {
      color: "white",
      fontSize: 26,
      textAlign: "center",
      fontWeight: "bold",
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
  });
};
