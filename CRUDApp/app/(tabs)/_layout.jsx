import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
    
        headerTitle: '',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

        }}
        screenOptions={{
            headerShown: false,
          }}
      />
      <Tabs.Screen
        name="todos"
        options={{
          title: 'My tasks',

        }}
        screenOptions={{
            headerShown: false,
          }}
      />
    </Tabs>
  );
}
