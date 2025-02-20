import {
  View, Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
import UAIcon from "../assets/icons/ua.png";
import GBIcon from "../assets/icons/en.png";
import i18n from "../app/i18.config";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const languages = [
    { code: "ua", icon: UAIcon, text: "Українська" },
    { code: "en", icon: GBIcon, text: "English" },
  ];
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(i18n.language);
  const selectLanguage = async (code) => {
    await i18n.changeLanguage(code);
    setSelected(code);
    setPressed(false);
  };

  const handlePress = () => {
    setPressed(!pressed);
  };

  const { t } = useTranslation();
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handlePress}>
          <Text style={styles.langBtnText}>{t("languageButton")}</Text>
        </Pressable>
      </View>
      {pressed && (
        <View style={styles.containerTooltip}>
          <View style={styles.containerLang}>
          {languages.map((item) => {
            return (
              <Pressable
                key={item.code}
                style={[
                  styles.item,
                  selected === item.code && { backgroundColor: "#f53a25" },
                ]}
                onPress={() => selectLanguage(item.code)}
              >
                <View >
                  <Image source={item.icon} style={styles.icon}/>
                </View>
                <Text style={styles.text}>{item.text}</Text>
              </Pressable>
            );
          })}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      height: 50,
      width: 100,
      borderRadius: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: 10,
      margin: 20,
      justifyContent: "center",
    },
    langBtnText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    containerTooltip: {
      position: "absolute",
      flex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 10,  
    },
    containerLang: {
      position: "absolute",
      bottom: 40,
      right: 20,
      width: 140,
      borderRadius: '40',
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 5,
      marginVertical: 5,
      backgroundColor: "rgba(252, 245, 232, 0.7)",
    },
    icon: {
      width: 40,
      height: 30,
      resizeMode: 'fit',
      marginRight: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 600,
    },
  });