import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../home/home";
import FreshScreen from "../home/fresh";
import TrendingScreen from "../home/trending";
import tabsStyles from "../tabStyle";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          ...tabsStyles.tabOption,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Fresh",
          ...tabsStyles.tabOption,
        }}
        name="Fresh"
        component={FreshScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Trending",
          ...tabsStyles.tabOption,
        }}
        name="Trending"
        component={TrendingScreen}
      />
    </Tab.Navigator>
  );
}
