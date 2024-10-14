import { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import LoginWall from "../LoginWall";
import mainContent from "@/mock/mainContent";
import ThemeColor from "@/themes/color";
import contentViewStyle from "./style";
import SpaceMedium from "../SpaceMedium";
import PostDivider from "../PostDivider";

export default function ContentViewComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {mainContent.map((item) => (
        <View key={item.key}>
          <TouchableOpacity>
            <View style={contentViewStyle.container}>
              <View style={contentViewStyle.subContainer}>
                <TouchableOpacity style={contentViewStyle.imageProfile}>
                  <Image
                    style={contentViewStyle.imageProfileInside}
                    source={require("@/assets/images/ic-logo.jpeg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={contentViewStyle.titleProfile}>
                    {item.profileName}
                  </Text>
                </TouchableOpacity>
                <Text style={contentViewStyle.date}>
                  {" · " + item.lastTime}
                </Text>
              </View>
              <TouchableOpacity>
                <Svg
                  width={16}
                  height={16}
                  fill={ThemeColor.lightGrey}
                  stroke={ThemeColor.lightGrey}
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                >
                  <Path
                    stroke="none"
                    d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <Text style={contentViewStyle.postTitle}>{item.title}</Text>
            <Image
              style={contentViewStyle.post}
              source={{ uri: item.image }}
              resizeMode="cover"
            />
            <View style={contentViewStyle.sectionOnePost}>
              <TouchableOpacity>
                <View style={contentViewStyle.sawerContainer}>
                  <Svg
                    width={16}
                    height={16}
                    fill={ThemeColor.white}
                    stroke={ThemeColor.white}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                  >
                    <Path
                      stroke="none"
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z"
                    />
                  </Svg>
                  <Text style={contentViewStyle.titleSawer}>Sawer</Text>
                </View>
              </TouchableOpacity>
              <View style={{ width: 8 }} />
              {item.tags.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={contentViewStyle.tagsContainer}
                >
                  <Svg
                    width={16}
                    height={16}
                    fill={ThemeColor.white}
                    stroke={ThemeColor.white}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                  >
                    <Path
                      stroke="none"
                      d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"
                    />
                  </Svg>
                  <Text style={contentViewStyle.titleSawer}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={contentViewStyle.sectionTwoContainer}>
              <View style={contentViewStyle.rowContainer}>
                <TouchableOpacity
                  style={contentViewStyle.upVote}
                  onPress={() => setModalVisible(true)}
                >
                  <Svg
                    width={16}
                    height={16}
                    fill={ThemeColor.white}
                    stroke={ThemeColor.white}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                  >
                    <Path
                      stroke="none"
                      d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"
                    />
                  </Svg>
                  <Text style={contentViewStyle.titleUpvote}>
                    {item.upVoteCount}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={contentViewStyle.downVote}
                  onPress={() => setModalVisible(true)}
                >
                  <Svg
                    width={16}
                    height={16}
                    fill={ThemeColor.white}
                    stroke={ThemeColor.white}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                  >
                    <Path
                      stroke="none"
                      d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z"
                    />
                  </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={contentViewStyle.comment}>
                  <Svg
                    width={16}
                    height={16}
                    fill={ThemeColor.white}
                    stroke={ThemeColor.white}
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                  >
                    <Path stroke="none" d="M7 7h10v2H7zm0 4h7v2H7z" />
                    <Path
                      stroke="none"
                      d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
                    />
                  </Svg>
                  <Text style={contentViewStyle.titleUpvote}>
                    {item.commentCount}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={contentViewStyle.bgComment}>
                <Svg
                  width={16}
                  height={16}
                  fill={ThemeColor.white}
                  stroke={ThemeColor.white}
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                >
                  <Path
                    stroke="none"
                    d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <SpaceMedium />
          </TouchableOpacity>
          <PostDivider />
          {LoginWall(modalVisible, setModalVisible)}
        </View>
      ))}
    </>
  );
}
