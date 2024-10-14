import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const bottomSheetProfileStyles = StyleSheet.create({
  bg: { backgroundColor: ThemeColor.dark },
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: ThemeColor.lightGrey,
    fontWeight: "bold",
  },
  bgPress: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  textItem: { fontSize: 16, color: ThemeColor.lightGrey, marginLeft: 16 },
  textSelected: { color: ThemeColor.primaryColor }
});

export default bottomSheetProfileStyles;
