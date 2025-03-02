import Modal from "react-native-modal";
import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location"; //  Expo Location
import Entypo from "@expo/vector-icons/Entypo";

export default function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Enable location services in settings."
        );
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    })();
  }, []);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View>
        <Text>Map: </Text>
        <Pressable onPress={toggleModal}>
          <Feather name="map-pin" size={24} color="black" />
        </Pressable>
      </View>

      <View>
        <Modal isVisible={isVisible}>
          <View>
            <View style={styles.container}>
              <MapView
                style={styles.map}
                mapType="hybrid"
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsScale={true}
                toolbarEnabled={true} // android only
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
            <Pressable onPress={toggleModal} style={styles.btn}>

              <Entypo name="cross" size={24} color="white" />
            </Pressable>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {

    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    position: "absolute",
    top: -210,  
    right: -15,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 50,
  },
  closeText: {
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
});
