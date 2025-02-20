import { Stack } from "expo-router";
import ThemeProvider from "../app/context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="todos" options={{ title: "" }} />
          <Stack.Screen name="todos/[id]" options={{ title: "", headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
