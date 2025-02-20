import { Appearance } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useTransition } from 'react';
import { Colors } from '@/constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useTranslation } from 'react-i18next';
import LanguageButton from '@/components/LanguageButton';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { View, Image, Text } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

const { t } = useTranslation();

return (
  
      <GestureHandlerRootView style={{ flex: 1 }}>
     <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="index" options={{ drawerLabel: t("welcomeTitle"), title: "" }}/>
      <Drawer.Screen name="explore" options={{ drawerLabel: t("benefitsLabel"), title: "" }} />
      <Drawer.Screen name="beverages" options={{ drawerLabel: t("beveragesLabel"), title: "" }} />
      <Drawer.Screen name="beans" options={{ drawerLabel: t("beansLabel"), title: "" }} />
      <Drawer.Screen name="contact" options={{ drawerLabel: t("contactsLabel"), title: "" }} />
    </Drawer>
      </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}> 
    
    <View style={{ flex: 1, padding: 20 }}><DrawerItemList {...props} />
      {/* Widget (Example: User Profile) */}
<LanguageButton />

      {/* Divider */}
      <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 10 }} />

      {/* Default Drawer Items (Keep them) */}
     
    </View>
    </DrawerContentScrollView>
  );
}