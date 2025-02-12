import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, View, Text, Appearance } from "react-native";
import { Link } from "expo-router";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useEffect } from "react";



export default function Contact() {
    const colorScheme = Appearance.getColorScheme();
    console.log(colorScheme);

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";

  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript"
          size={250}
          color={imgColor}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Our Coffee Quarters</Text>
        <Text style={styles.subTitle}>
          To find out more, join or suggest - connect with us
        </Text>
        <View style={styles.textView}>
        <Text style={styles.text}>Call: {" "}
          <Link style={styles.textLink} href="tel:555555555">555-555-555</Link>
        </Text>
        <Text style={styles.text}>Mail: {' '}
          <Link style={styles.textLink} href="mailto:ok@i.ua">ok@i.ua</Link>
        </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: theme.background,
        flexGrow: 1,
    },
    imgContainer: {
        backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
        height: 250,
      },
      textContainer: {
        backgroundColor: theme.background,
        padding: 12,
      },
      title: {
        color: theme.text,
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        marginBottom: 10,
        textAlign: 'center',
      },
      subTitle: {
        fontSize: 20,
      },
      textView: {
        marginBottom: 10,
        marginTop: 20,
      },
      text: {
        color: theme.text,
        fontSize: 16,
        lineHeight: 24,
      },
      textLink: {
        textDecorationLine: 'underline',
      }
  });
};
