import { Modal } from "react-native-modal";
import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location"; // Import Expo Location

export default function Map() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission Denied", "Enable location services in settings.");
          return;
        }
        
        let userLocation = await Location.getCurrentPositionAsync({});
        setLocation(userLocation.coords);
      })();
    }, []);
  
    return (
      <>
        <View>
          <Text>Map: </Text>
          <Pressable>
            <Feather name="map-pin" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.container}>
          <MapView
        
            style={styles.map}
            mapType="hybrid"
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            showsScale={true}
            toolbarEnabled={true} // Enables zoom controls on Android
            region={
              location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                  }
                : {
                    latitude: 25.274075,
                    longitude: 51.603083,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                  }
            }
          />
        </View>
      </>
    );
}


const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
