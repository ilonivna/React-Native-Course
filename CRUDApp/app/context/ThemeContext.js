import { createContext, useState } from "react";
import { Appearance } from "react-native";
import Colors from "../constants/Colors.ts";

export const ThemeContext = createContext();

 const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
