import {
  ImageBackground,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import BG from "../../assets/images/background/welcome.jpeg";
import {Montserrat_500Medium, useFonts} from "@expo-google-fonts/montserrat";

export default function Index() {
  const [loaded, error] = useFonts({
    Montserrat_500Medium,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to your Pocket Task Manager</Text>
        <Link href="/todos" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>To tasks</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: 'Montserrat_500Medium',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    borderRadius: 30,
    padding: 10,
    marginTop: 215,
    width: 155,
    textAlign: "right",
   lineHeight: 55,
    alignSelf: 'flex-end',
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  btn: {
    width: 120,
    height: 60,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 30,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 80,
  },
  btnText: {
    color: 'black',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 24,
    textAlign: 'center',
  }


});
