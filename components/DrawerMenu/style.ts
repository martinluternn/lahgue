import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const drawerMenuStyles = StyleSheet.create({
  box: {
    color: ThemeColor.white,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ThemeColor.divider,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    padding: 16,
  },
  titleLogin: {
    color: ThemeColor.lightGrey,
    textAlign: "center",
    paddingBottom: 8,
    fontWeight: "700",
  },
  subtitleLogin: {
    color: ThemeColor.lightGrey,
    textAlign: "center",
    paddingBottom: 8,
    fontSize: 12,
  },
  unselectMenu: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  unselectExploreMenu: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  unselectCategoryMenu: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  bgExploreMeme: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleExploreMenu: {
    flex: 1,
    color: ThemeColor.lightGrey,
    marginLeft: 14,
  },
  titleCategoryMenu: {
    color: ThemeColor.lightGrey,
    fontSize: 16,
    marginLeft: 16,
  },
  exploreMenuTitle: {
    color: ThemeColor.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  selectMenu: {
    backgroundColor: ThemeColor.primaryColor,
  },
  titleMenu: { color: ThemeColor.white, fontWeight: "700", marginLeft: 16 },
  otherMemeSection: {
    color: ThemeColor.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  exploreTitle: {
    color: ThemeColor.primaryColor,
    fontWeight: "bold",
    paddingHorizontal: 24,
    width: "100%",
    fontSize: 16,
  },
  informationTitle: {
    color: ThemeColor.primaryColor,
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  informationSubtitle: {
    flexDirection: "row",
    paddingRight: 24,
    marginBottom: 4,
    columnGap: 12,
  },
  informationSection: {
    color: ThemeColor.lightGrey,
    fontSize: 14,
    marginBottom: 4,
  },
  selectedText: {
    color: ThemeColor.primaryColor,
  },
  informationPaddingHorizontal: {
    paddingHorizontal: 24,
  },
  informationContainer: {
    flexDirection: "row",
    paddingRight: 24,
    columnGap: 12,
  },
  justifyContent: {
    justifyContent: "space-between",
  },
});

export default drawerMenuStyles;
