import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  box: {
    backgroundColor: "#2c3942",
    justifyContent: "center",
    alignItems: "center",
    borderColor: ThemeColor.primaryColor,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
  },
  title: {
    color: ThemeColor.lightGrey,
    fontSize: 16,
    marginLeft: 24,
  },
});

export default homeStyles;
