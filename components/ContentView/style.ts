import ThemeColor from "@/themes/color";
import { StyleSheet } from "react-native";

const contentViewStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  subContainer: { flexDirection: "row", alignItems: "center" },
  imageProfile: {
    height: 30,
    width: 30,
    minHeight: 30,
    minWidth: 30,
    borderRadius: 999,
    backgroundColor: ThemeColor.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageProfileInside: { height: 30, width: 30, borderRadius: 999 },
  titleProfile: {
    fontSize: 12,
    color: ThemeColor.lightGrey,
    fontWeight: "700",
    marginLeft: 8,
  },
  date: { fontSize: 12, color: "silver" },
  postTitle: {
    fontSize: 16,
    color: ThemeColor.lightGrey,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  post: { width: "100%", height: 400 },
  sectionOnePost: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sawerContainer: {
    borderRadius: 999,
    backgroundColor: "#dd952a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: "row",
  },
  titleSawer: {
    color: ThemeColor.white,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 8,
  },
  tagsContainer: {
    borderRadius: 999,
    borderColor: ThemeColor.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: "row",
    marginRight: 8,
  },
  sectionTwoContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  rowContainer: { flexDirection: "row", alignItems: "center" },
  upVote: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: ThemeColor.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: "row",
  },
  titleUpvote: {
    color: ThemeColor.white,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 8,
  },
  downVote: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: ThemeColor.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
  },
  comment: {
    borderRadius: 8,
    borderColor: ThemeColor.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: "row",
    marginLeft: 8,
  },
  bgComment: {
    borderRadius: 8,
    borderColor: ThemeColor.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    transform: [{ scaleX: -1 }],
    flexDirection: "row",
    marginLeft: 8,
  },
});

export default contentViewStyle;
