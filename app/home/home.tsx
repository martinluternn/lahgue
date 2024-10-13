import { StyleSheet, ScrollView, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContentViewComponent from "@/components/ContentView";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  const styles = StyleSheet.create({
    box: {
      backgroundColor: "#2c3942",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#65a4ec",
      borderRadius: 8,
      borderWidth: 1,
      margin: 16,
      paddingHorizontal: 14,
      paddingVertical: 12,
      flexDirection: "row",
    },
  });

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text>💰</Text>
        <Text
          style={{
            color: "#e4e4e4",
            fontSize: 16,
            marginLeft: 24,
          }}
        >
          {"Kamu punya teman? Sini dapatkan koin gratis!"}
        </Text>
      </View>
      <ContentViewComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
