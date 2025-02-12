import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "Go back", headerShown: false }} />
    <Stack.Screen name="todos" options={{ title: "" }}/>
  </Stack>;
}
