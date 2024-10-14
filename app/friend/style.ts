import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const friendStyles = StyleSheet.create({
  headerTopic: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageTopic: { width: 64, height: 64 },
  padding16: { padding: 16 },
  viewTitleTopic: { flex: 1, marginLeft: 16 },
  titleTopic: { fontSize: 16, fontWeight: "bold", color: ThemeColor.lightGrey },
  memberCount: { fontSize: 14, color: "silver", marginTop: 4 },
  viewDesc: { color: "silver", marginTop: 8 },
  groupContainer: { alignItems: "center", paddingVertical: 16 },
  titleGroup: {
    fontSize: 32,
    fontWeight: "bold",
    color: ThemeColor.lightGrey,
    marginTop: 12,
  },
  subtitleGroup: { fontSize: 16, color: ThemeColor.lightGrey, marginTop: 12 }
});

export default friendStyles;
