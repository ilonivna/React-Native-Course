import { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import BG from "@/assets/images/background/welcome3.jpeg";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Todos() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text
          style={[styles.listItemText, item.completed && styles.completed]}
          onPress={() => toggleTodo(item.id)}
        >
          {item.title}
        </Text>
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
      {/* <View style={styles.overlay}/> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
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
          <FlatList
            data={todos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(todo) => todo.id.toString()}
            renderItem={renderItem}
            style={styles.list}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  //   overlay: {
  //     ...StyleSheet.absoluteFillObject,
  //     backgroundColor: "rgba(255, 255, 255, 0.1)",
  //   },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 1024,
    alignItems: "center",
    marginBottom: 20,
    pointerEvents: "auto",
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
  },
  btn: {},
  listContainer: {
    marginBottom: 160,
  },
  list: {},
  listItem: {   flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10, },

  listItemText: {
    fontSize: 18,
    color: "white",
  },
  completed: {textDecorationLine: "line-through",
    opacity: 0.6,},
});
