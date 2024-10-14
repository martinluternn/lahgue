import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const bottomSheetBackdropStyles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.black,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
});

export default bottomSheetBackdropStyles;
