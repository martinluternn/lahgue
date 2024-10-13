import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../home/home";
import FreshScreen from "../home/fresh";
import TrendingScreen from "../home/trending";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { textTransform: 'none', fontWeight: 700, fontSize: 14 },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Fresh",
          tabBarLabelStyle: { textTransform: 'none', fontWeight: 700, fontSize: 14 },
        }}
        name="Fresh"
        component={FreshScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Trending",
          tabBarLabelStyle: { textTransform: 'none', fontWeight: 700, fontSize: 14 },
        }}
        name="Trending"
        component={TrendingScreen}
      />
    </Tab.Navigator>
  );
}
