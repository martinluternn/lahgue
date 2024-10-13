import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopicScreen from "../friend/topic";
import GroupScreen from "../friend/group";

const Tab = createMaterialTopTabNavigator();

export default function FriendTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Topik",
          tabBarLabelStyle: { textTransform: 'none', fontWeight: 700, fontSize: 14 },
        }}
        name="Topik"
        component={TopicScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Sudah Gabung",
          tabBarLabelStyle: { textTransform: 'none', fontWeight: 700, fontSize: 14 },
        }}
        name="Sudah Gabung"
        component={GroupScreen}
      />
    </Tab.Navigator>
  );
}
