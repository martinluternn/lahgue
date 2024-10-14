import drawerStyles from "@/app/style";
import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const mainButtonStyles = StyleSheet.create({
  bg: {
    backgroundColor: ThemeColor.primaryColor,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  title: {
    color: ThemeColor.white,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default mainButtonStyles;
