import LoginWall from "@/components/LoginWall";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function TopicScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const topicMenu = [
    {
      key: "post1",
      title: "Stiker Meme",
      memberCount: "5+ member",
      desc: "Gambar random menjadi stiker meme",
      image: "https://cache.lahelu.com/topic-TJLBOsId9-44791",
    },
    {
      key: "post2",
      title: "Stiker Meme",
      memberCount: "5+ member",
      desc: "Gambar random menjadi stiker meme",
      image: "https://cache.lahelu.com/topic-TJLBOsId9-44791",
    },
    {
      key: "post3",
      title: "Stiker Meme",
      memberCount: "5+ member",
      desc: "Gambar random menjadi stiker meme",
      image: "https://cache.lahelu.com/topic-TJLBOsId9-44791",
    },
    {
      key: "post4",
      title: "Stiker Meme",
      memberCount: "5+ member",
      desc: "Gambar random menjadi stiker meme",
      image: "https://cache.lahelu.com/topic-TJLBOsId9-44791",
    },
    {
      key: "post5",
      title: "Stiker Meme",
      memberCount: "5+ member",
      desc: "Gambar random menjadi stiker meme",
      image: "https://cache.lahelu.com/topic-TJLBOsId9-44791",
    },
  ];

  return (
    <ScrollView>
      {topicMenu.map((item) => (
        <>
          <TouchableOpacity key={item.key} style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 64, height: 64 }}
                source={{ uri: item.image }}
                resizeMode="cover"
              />
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#e4e4e4" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: "silver", marginTop: 4 }}>
                  {item.memberCount}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#65a4ec",
                  borderRadius: 999,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                }}
                onPress={() => setModalVisible(true)}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  {"Gabung"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: "silver", marginTop: 8 }}>{item.desc}</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: "#000000", height: 4 }} />
          {LoginWall(modalVisible, setModalVisible)}
        </>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
