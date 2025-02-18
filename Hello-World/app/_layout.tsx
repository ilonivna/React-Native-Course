import { Appearance } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors';

import "./i18.config.js"




// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light"><Stack screenOptions={{ headerTintColor: theme.text, headerShadowVisible: false, headerTransparent: true, headerTitleAlign: 'center',  }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }}/>
        <Stack.Screen name="explore" options={{ title: '' }}/>
        <Stack.Screen name="beverages" options={{ title: '', headerStyle: { backgroundColor: 'rgba(238, 228, 228, 0.44)' } }}/>
        <Stack.Screen name="beans" options={{ title: '', headerStyle: { backgroundColor: 'rgba(238, 228, 228, 0.44)' } }}
       />
        <Stack.Screen name="contact" options={{ title: '', headerStyle: { backgroundColor: 'rgba(238, 228, 228, 0.44)' } }}
       />
        <Stack.Screen name="+not-found" />
      </Stack></GluestackUIProvider>
  );
}
  //  //