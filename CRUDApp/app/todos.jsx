import { useContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { data } from "../data/todos";
import {
  Text,
  Pressable,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import BG from "@/assets/images/background/welcome3.jpeg";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat";
import { ThemeContext } from "./context/ThemeContext";
import Animated, { LinearTransition } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import Theme from "../assets/images/background/day-night-icon.jpg"

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [showCue, setShowCue] = useState(false);
  const { theme, setColorScheme, colorScheme } = useContext(ThemeContext);
  const [loaded, error] = useFonts({
    Montserrat_500Medium,
  });

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("TodoApp");
        const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (storageTodos && storageTodos.length) {
          setTodos(storageTodos.sort((a, b) => b.id - a.id));
        } else {
          setTodos(data.sort((a, b) => b.id - a.id));
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        await AsyncStorage.setItem("TodoApp", jsonValue);
      } catch (e) {
        console.error(e);
      }
    };

    storeData();
  }, [todos]);

  if (!loaded && !error) {
    return null;
  }
  const styles = createStyles(theme, colorScheme);

  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id: newId, title: text, completed: false }, ...todos]);
      setText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handlePress = (id) => {
    router.push(`/todos/${id}`)
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Pressable
          onLongPress={() => toggleTodo(item.id)}
          onPress={() => handlePress(item.id)}
        >
          <Text
            style={[styles.listItemText, item.completed && styles.completed]}
          >
            {item.title}
          </Text>
        </Pressable>
        <Pressable onPress={() => removeTodo(item.id)}>
          <AntDesign
            name="delete"
            size={24}
            color="white"
            selectable={undefined}
          />
        </Pressable>
      </View>
    );
  };
  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }}>
      {colorScheme === "light" && <View style={styles.overlay} />}
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          maxLength={40}
            style={styles.input}
            placeholder="Add a new task..."
            placeholderTextColor="white"
            value={text}
            onChangeText={setText}
          />
          <Pressable style={styles.btn} onPress={addTodo}>
            <Entypo name="add-to-list" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.listContainer}>
          <Animated.FlatList
            data={todos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(todo) => todo.id.toString()}
            renderItem={renderItem}
            style={styles.list}
            contentContainerStyle={{ flexGrow: 1 }}
            itemLayoutAnimation={LinearTransition}
            keyboardDismissMode={"on-drag"}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable
            onPress={() => {
              setColorScheme(colorScheme === "light" ? "dark" : "light");
            }}
            style={styles.themeBtn}
          >
            <Image source={Theme} style={styles.imageTheme}></Image>
          </Pressable>
          {showCue && (<Text style={styles.cue}>Long press to toggle completed</Text>)}
          <Pressable style={styles.themeBtn} onPress={()=>setShowCue(!showCue)}>
          <FontAwesome name="question" size={24} color="black" />
          </Pressable>
          </View>
          <StatusBar style={"dark"} />
        </View>
      
      </SafeAreaView>
    </ImageBackground>
  );
}

const createStyles = (theme, colorScheme) => {
  return StyleSheet.create({
    cue: {
      color: 'gray',
      marginTop: 57,
      marginLeft: 63,
    },
imageTheme: {
  width: "100%",
  height: "100%", 
  resizeMode: 'cover',
  borderRadius: 30,  
  overflow: 'hidden', 
},
    container: {
      flex: 1,
      padding: 15,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    inputContainer: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 1024,
      alignItems: "center",
      marginBottom: 20,
      pointerEvents: "auto",
    },
    themeBtn: {
      width: 50,
      height: 50,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      justifyContent: "center",
      borderRadius: "50%",
      marginTop: 40,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderColor: "rgba(255, 255, 255, 0.7)",
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      marginRight: 10,
      fontSize: 18,
      minWidth: 0,
      color: "white",
      fontFamily: "Montserrat_500Medium",
    },
    btn: {},
    listContainer: {
      marginBottom: 160,
    },
    list: {},
    listItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      marginVertical: 5,
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: 10,
    },

    listItemText: {
      fontSize: 18,
      fontFamily: "Montserrat_500Medium",
      color: "white",
    },
    completed: { textDecorationLine: "line-through", opacity: 0.6 },
  });
};
