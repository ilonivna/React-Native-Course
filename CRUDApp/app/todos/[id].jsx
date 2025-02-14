import { useLocalSearchParams } from "expo-router";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  Pressable,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat";
import Animated, { LinearTransition } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "../context/ThemeContext";
import BG from "../../assets/images/background/opt3.webp";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EditScreen() {
  const { id } = useLocalSearchParams();
  const [todo, setTodo] = useState({});
  const router = useRouter();
  const [iconColorCancel, setIconColorCancel] = useState("gray");
  const [iconColorConfirm, setIconColorConfirm] = useState("gray");
  const { theme, setColorScheme, colorScheme } = useContext(ThemeContext);
  const [loaded, error] = useFonts({
    Montserrat_500Medium,
  });

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const jsonValue = await AsyncStorage.getItem("TodoApp");
        const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (storageTodos && storageTodos.length) {
          const myTodo = storageTodos.find((todo) => todo.id.toString() === id);
          setTodo(myTodo);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData(id);
  }, [id]);

  if (!loaded && !error) {
    return null;
  }
  const styles = createStyles(theme, colorScheme);

  const handleSave = async () => {
    try {
      const savedTodo = { ...todo, title: todo.title };
      const jsonValue = await AsyncStorage.getItem("TodoApp");
      const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (storageTodos && storageTodos.length) {
        const otherTodos = storageTodos.filter(
          (todo) => todo.id !== savedTodo.id
        );
        const allTodos = [...otherTodos, savedTodo];
        await AsyncStorage.setItem("TodoApp", JSON.stringify(allTodos));
      } else {
        await AsyncStorage.setItem("TodoApp");
      }
      router.push("/todos");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.inputBtnCont}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} maxLength={40} value={todo?.title || ''} onChangeText={((text) => setTodo({...todo, title: text}))}/>
            </View>
            <View style={styles.btnContainer}>
              <Pressable
                onPressIn={() => {
                  setIconColorCancel("#ff9900");
                }}
                onPress={()=>router.push('/todos')}
                onPressOut={() => {
                  setIconColorCancel("gray");
                }}
              >
                <AntDesign
                  name="closecircle"
                  size={44}
                  color={iconColorCancel}
                />
              </Pressable>
              <Pressable
                onPress={handleSave}
                onPressIn={() => {
                  setIconColorConfirm("#339933");
                }}
                onPressOut={() => {
                  setIconColorConfirm("gray");
                }}
              >
                <AntDesign
                  name="checkcircle"
                  size={44}
                  color={iconColorConfirm}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ImageBackground>
  );
}

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      marginTop: 240,
    },
    inputBtnCont: {
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 20,
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    input: {
      flex: 1,
      borderColor: "rgba(0, 0, 0, 0.7)",
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      marginRight: 10,
      fontSize: 18,
      minWidth: 0,
      color: "black",
      fontFamily: "Montserrat_500Medium",
    },
    inputContainer: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 1024,
      alignItems: "center",
      marginBottom: 20,
      pointerEvents: "auto",
    },
  });
};
