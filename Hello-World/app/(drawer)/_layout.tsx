import { Appearance } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;



  return (
  
      <GestureHandlerRootView style={{ flex: 1 }}>

        <Drawer>
      <Drawer.Screen name="index" options={{ drawerLabel: "Home", title: "Home" }}/>
      <Drawer.Screen name="explore" options={{ drawerLabel: "Why Coffee?", title: "Benefits" }} />
      <Drawer.Screen name="beverages" options={{ drawerLabel: "Beverages", title: "Beverages" }} />
      <Drawer.Screen name="beans" options={{ drawerLabel: "Beans", title: "Beans" }} />
      <Drawer.Screen name="contact" options={{ drawerLabel: "Contact", title: "Contact" }} />
    </Drawer>
      </GestureHandlerRootView>
  );
}
