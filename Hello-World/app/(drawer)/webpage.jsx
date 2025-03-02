import { ActivityIndicator, View } from "react-native";
import WebView from "react-native-webview";

export default function Webpage() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.aboutcoffee.org/" }}
        style={{ flex: 1 }}
        startInLoadingState={true} // ✅ This enables the loader
        renderLoading={() => <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: "center" }}/>}
      ></WebView>
    </View>
  );
}
