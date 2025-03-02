import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://maps.app.goo.gl/FYWGbqYAeUtnRms77" }} 
        style={styles.webview} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
  },
  webview: {
    flex: 1,
  },
});
