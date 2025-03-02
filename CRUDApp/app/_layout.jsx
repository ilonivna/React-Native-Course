import { Stack } from "expo-router";
import ThemeProvider from "./context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ErrorBoundary>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="todos" options={{ title: "" }} />
          <Stack.Screen name="todos/[id]" options={{ title: "", headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        </ErrorBoundary>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
