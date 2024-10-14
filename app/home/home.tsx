import { ScrollView, View, Text } from "react-native";
import ContentViewComponent from "@/components/ContentView";
import homeStyles from "./style";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={homeStyles.box}>
        <Text>💰</Text>
        <Text style={homeStyles.title}>
          {"Kamu punya teman? Sini dapatkan koin gratis!"}
        </Text>
      </View>
      <ContentViewComponent />
    </ScrollView>
  );
}
