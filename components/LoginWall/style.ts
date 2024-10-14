import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const loginWallStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ThemeColor.overlay,
  },
  modalView: {
    width: "100%",
    padding: 16,
    backgroundColor: ThemeColor.dark,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: 50,
    width: 50,
    minHeight: 50,
    minWidth: 50,
    borderRadius: 999,
    backgroundColor: ThemeColor.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageInside: { height: 35, width: 35, borderRadius: 999 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: ThemeColor.lightGrey,
    marginVertical: 8,
  },
  subtitle: { fontSize: 12, color: ThemeColor.gray, marginBottom: 24 },
  container: {
    borderColor: ThemeColor.divider,
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row",
    maxWidth: 250,
    width: "100%",
  },
  titleButton: {
    fontSize: 12,
    fontWeight: "700",
    color: "silver",
    width: "100%",
    textAlign: "center",
  },
});

export default loginWallStyles;
