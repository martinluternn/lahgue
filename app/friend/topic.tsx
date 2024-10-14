import LoginWall from "@/components/LoginWall";
import topicContent from "@/mock/topicContent";
import { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import friendStyles from "./style";
import MainButton from "@/components/MainButton";
import PostDivider from "@/components/PostDivider";

export default function TopicScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      {topicContent.map((item) => (
        <View key={item.key}>
          <TouchableOpacity style={friendStyles.padding16}>
            <View style={friendStyles.headerTopic}>
              <Image
                style={friendStyles.imageTopic}
                source={{ uri: item.image }}
                resizeMode="cover"
              />
              <View style={friendStyles.viewTitleTopic}>
                <Text style={friendStyles.titleTopic}>{item.title}</Text>
                <Text style={friendStyles.memberCount}>{item.memberCount}</Text>
              </View>
              <MainButton
                title="Gabung"
                onPress={() => setModalVisible(true)}
              />
            </View>
            <Text style={friendStyles.viewDesc}>{item.desc}</Text>
          </TouchableOpacity>
          <PostDivider />
          {LoginWall(modalVisible, setModalVisible)}
        </View>
      ))}
    </ScrollView>
  );
}
