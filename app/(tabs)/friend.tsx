import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopicScreen from "../friend/topic";
import GroupScreen from "../friend/group";

const Tab = createMaterialTopTabNavigator();

export default function FriendTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Topik" component={TopicScreen} />
      <Tab.Screen name="Sudah Gabung" component={GroupScreen} />
    </Tab.Navigator>
  );
}
