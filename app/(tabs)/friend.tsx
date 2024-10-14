import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopicScreen from "../friend/topic";
import GroupScreen from "../friend/group";
import tabsStyles from "../tabStyle";

const Tab = createMaterialTopTabNavigator();

export default function FriendTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Topik",
          ...tabsStyles.tabOption,
        }}
        name="Topik"
        component={TopicScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Sudah Gabung",
          ...tabsStyles.tabOption,
        }}
        name="Sudah Gabung"
        component={GroupScreen}
      />
    </Tab.Navigator>
  );
}
