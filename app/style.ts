import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const drawerStyles = StyleSheet.create({
  headerRightContainerStyle: { padding: 12, marginRight: 6 },
  headerTitleStyle: {
    fontWeight: "900",
    color: ThemeColor.primaryColor,
    textShadowColor: ThemeColor.tertiary,
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1.5,
  },
});

export default drawerStyles;
